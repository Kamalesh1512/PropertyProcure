import { useParams } from "next/navigation";
import React from "react";
import { getPropertiesImages, getPropertyById } from "@/actions/properties";
import AdminPropertyPage from "./_components/AdminPropertyPage";


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
      <AdminPropertyPage property={property} imageUrls={images}/>
    </div>
  );
};

export default page;
