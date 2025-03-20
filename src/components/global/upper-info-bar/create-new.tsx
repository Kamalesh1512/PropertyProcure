'use client'
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const CreateButton = () => {
  const router = useRouter();
  return (
    <div>
    <Button
      className="rounded-lg font-semibold"
      onClick={() => router.push("/create-property")}
    >
      <Plus />
      Create New
    </Button>
    </div>
  );
};

export default CreateButton;
