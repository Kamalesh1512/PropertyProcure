"use client";

import { useImageStore } from "@/store/imageStore";
import { cn } from "@/lib/utils";
import { Image } from "lucide-react";
import React from "react";

interface ThumbnailPreviewProps {
  images?: string; // Optional image ID to select a specific image
}

const ThumbnailPreview = ({ images }: ThumbnailPreviewProps) => {
  let imageUrl;

  if (!images) {
    imageUrl = "/file.svg";
  }

  imageUrl = images;

  return (
    <div
      className={cn(
        "w-full relative aspect-[16/9] rounded-lg overflow-hidden transition-all duration-200"
      )}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Property Preview"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-300 flex justify-center items-center">
          <Image className="w-6 h-6 text-gray-500" />
        </div>
      )}
    </div>
  );
};

export default ThumbnailPreview;
