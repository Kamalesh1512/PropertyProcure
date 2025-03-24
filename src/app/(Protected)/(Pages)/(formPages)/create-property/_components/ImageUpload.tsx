"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { generateSasUrl } from "@/actions/azure";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react"; // Icon for remove button
import Image from "next/image";
import { useImageStore } from "@/store/imageStore";

export default function ImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress,setUploadProgress] =useState(0)
  const { addImage, removeImage, images } = useImageStore();
  const { toast } = useToast();

  const uploadToAzure = async (file: File) => {
    try {
      // Request SAS URL
      const response = await generateSasUrl(file.name, file.type);
      if (response.status !== 200) throw new Error(response.error);

      console.log(response.blobUrl)

      if (response.blobUrl && response.sasUrl) {
              // Upload file using Axios
      await axios.put(response.sasUrl, file, {
        headers: { 
          'x-ms-blob-type':'BlockBlob',
          "Content-Type": file.type },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
          setUploadProgress(progress)
          // toast({ description: `Uploading: ${progress}%` });
        },
      });

      // Add uploaded image to state
      addImage(response.blobUrl);
      toast({ description: "✅ Image uploaded successfully" });
        
      }


    } catch (error) {
      toast({ description: "⚠️ Upload failed", variant: "destructive" });
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setUploading(true);
      await Promise.all(acceptedFiles.map(uploadToAzure));
      setUploading(false);
    },
    [addImage, toast]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  return (
    <div className="space-y-4">
      {/* Dropzone UI */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
          isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} disabled={uploading} />
        {isDragActive ? (
          <p className="text-blue-500 font-semibold">Drop the images here...</p>
        ) : (
          <p className="text-gray-600">Drag & drop images here or click to upload</p>
        )}
      </div>
      { uploadProgress > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${uploadProgress - 5}%` }}
          ></div>
        </div>
      )}


      {/* Preview Images */}
      <div className="flex flex-wrap gap-3">
        {images.map((image) => (
          <div key={image} className="relative">
            <Image src={image} alt="Uploaded" width={100} height={100} className="rounded-md object-cover" />
            <button
              onClick={() => removeImage(image)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 transition"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
