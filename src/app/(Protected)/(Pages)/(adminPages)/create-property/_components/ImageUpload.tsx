"use client";

import { useState } from "react";
import { uploadImageToAzure } from "@/actions/azure";
import { useImageStore } from "@/store/imagStore";
import { useToast } from "@/hooks/use-toast";

export default function ImageUpload() {
  const [uploading, setUploading] = useState(false);
  const { addImage, images } = useImageStore();
  const { toast } = useToast();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const response = await uploadImageToAzure(file);
    if (response.status === 200 && response.data) {
      addImage(response.data);
      setUploading(false);
      toast({
        description: "✅Image uploaded",
        variant: "default",
      });
    } else {
      toast({
        description: "⚠️Failed to upload image",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <input type="file" onChange={handleFileChange} disabled={uploading} />
      <div className="flex gap-2">
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt="Property"
            className="w-24 h-24 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
