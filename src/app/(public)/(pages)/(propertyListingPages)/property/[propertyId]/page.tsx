import { useParams } from "next/navigation";
import React from "react";
import PropertyPage from "./_components/PropertyPage";
import { getPropertiesImages, getPropertyById } from "@/actions/properties";

interface propertyPageProps {
  params: Promise<{
    propertyId: number;
  }>;
}

const page = async ({ params }: propertyPageProps) => {
  const { propertyId } = await params;

  const propertyResult = await getPropertyById(propertyId);
  const imageResult = await getPropertiesImages(propertyId);

  const property = propertyResult?.data || [];
  const images = imageResult?.data || [];

  return (
    <div>
      <PropertyPage property={property} imageUrls={images}/>
    </div>
  );
};

export default page;
