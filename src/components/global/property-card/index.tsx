"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { timeAgo } from "@/lib/utils";
import AlertDialogBox from "../alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { deleteProject, recoverProperty } from "@/actions/properties";
import ThumbnailPreview from "./thumbnail-preview";

interface PropertyCardProps {
  propertyId: number;
  price:number,
  title: string,
  createdAt: Date | null;
  isDelete: boolean | null;
  image: string;
  isAdmin:Promise<boolean> | boolean,
}

const PropertyCard = ({
  propertyId,
  title,
  price,
  createdAt,
  isDelete,
  image,
  isAdmin
}: PropertyCardProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  const handleNavigation = () => {
    if (isAdmin) {
      router.push(`admin/property/${propertyId}`);
    }
    else{
      router.push(`/property/${propertyId}`);
    }
    
  };

  const handleRecover = async () => {
    setLoading(true);
    if (!propertyId) {
      setLoading(false);
      toast({
        variant: "destructive",
        description: "Error Project not found",
      });
    }
    try {
      const response = await recoverProperty(propertyId);
      if (response.status !== 200) {
        toast({
            variant: "destructive",
            description: 'Failed to recover project',
          });
      }
      setOpen(false)
      router.refresh()
      toast({
        variant: "default",
        description: "Project recovered sucessfully",
      });
    } catch (error) {
        console.log(error)
        toast({
            variant: "destructive",
            description: 'Failed to recover project',
          });
    }
  };

  const handleDelete = async () =>{
    setLoading(true);
    if (!propertyId) {
      setLoading(false);
      toast({
        variant: "destructive",
        description: "Error Project not found",
      });
    }
    try {
      const response = await deleteProject(propertyId);
      if (response.status !== 200) {
        toast({
            variant: "destructive",
            description: 'Failed to delete project',
          });
      }
      setOpen(false)
      router.refresh()
      toast({
        variant: "default",
        description: "Project deleted sucessfully",
      });
    } catch (error) {
        console.log(error)
        toast({
            variant: "destructive",
            description: 'Failed to delete project',
          });
    }
  };
  

  return (
    <div>
      <motion.div
        className={`group w-full flex flex-col gap-y-3 rounded-xl p-3 transition-colors ${
          !isDelete && "hover:bg-muted-foreground/50 bg-muted/50"
        }`}
        variants={itemVariants}
      >
        <div
          className="relative aspect-[16/10] overflow-hidden rounded-lg cursor-pointer"
          onClick={handleNavigation}
        >
          <ThumbnailPreview images ={image}/>
        </div>
        <div className="w-full">
          <div className="space-y-1">
            <h3 className="font-semibold text-base text-primary line-clamp-1">
              {title}
            </h3>
            <h4 className="font-semibold text-base text-muted-foreground line-clamp-1">Price: ₹ {price}</h4>
            <div className="flex w-full justify-between items-center gap-2">
              <p
                className="text-sm text-muted-foreground"
                suppressHydrationWarning
              >
                {createdAt && timeAgo(createdAt)}
              </p>
              {isAdmin ?(<React.Fragment>
                {isDelete ? (
                <AlertDialogBox
                  description="This will recover your projects and restore your data."
                  className="bg-green-500 text-white dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700"
                  loading={loading}
                  open={open}
                  onClick={handleRecover}
                  handleOpen={() => setOpen(!open)}
                >
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    className="bg-background/15 dark:hover:bg-background/90"
                    disabled={loading}
                  >
                    Recover
                  </Button>
                </AlertDialogBox>
              ) : (
                <AlertDialogBox
                description="This will delete your project and sent to trash."
                className="bg-red-500 text-white dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700"
                loading={loading}
                open={open}
                onClick={handleDelete}
                handleOpen={() => setOpen(!open)}
              >
                <Button
                  size={"sm"}
                  variant={"ghost"}
                  className="bg-background/15 dark:hover:bg-background/90"
                  disabled={loading}
                >
                  Delete
                </Button>
              </AlertDialogBox>
              )}

              </React.Fragment>):(
                <>
                </>
              )
              }
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PropertyCard;
