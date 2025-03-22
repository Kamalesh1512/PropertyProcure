"use client";

import { deleteAllProperties } from "@/actions/properties";
import AlertDialogBox from "@/components/global/alert-dialog";
import { Button } from "@/components/ui/button";
import { properties } from "@/db/schema";
import { useToast } from "@/hooks/use-toast";
import { InferSelectModel } from "drizzle-orm";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type PropertyType = InferSelectModel<typeof properties>;

interface DeleteAllButtonProps {
  properties: PropertyType[];
}

const DeleteAllButton = ({ properties }: DeleteAllButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { toast } = useToast();

  const handleDeleteAllProjects = async () => {
    setLoading(true);
    if (!properties || properties.length === 0) {
      setLoading(false);
      toast({
        variant: "destructive",
        description: "No projects found",
      });
      setOpen(false);
    }
    try {
      const propertyIds = properties.map((property) => property.id);
      const response = await deleteAllProperties(propertyIds);

      if (response.status !== 200) {
        throw new Error("Failed to delete all projects");
      }
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Failed to delete all projects",
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <AlertDialogBox
      description="This action cannot be undone.This will permanently delete all your porject and remove your data"
      className="bg-red-600 text-white dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700"
      onClick={handleDeleteAllProjects}
      loading={loading}
      handleOpen={() => setOpen(!open)}
      open={open}
    >
      <Button
        size={"lg"}
        className="bg-background-80 rounded-lg dark:hover:bg-background-90 text-primary font-semibold hover:text-white"
      >
        <Trash />
        Delete All
      </Button>
    </AlertDialogBox>
  );
};

export default DeleteAllButton;
