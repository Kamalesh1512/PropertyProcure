export const dynamic = "force-dynamic";
import React from "react";
import NotFound from "@/components/global/not-found";
import Properties from "@/components/global/properties";
import { getDeletedProperties } from "@/actions/properties";
import DeleteAllButton from "./_component/DeleteAllButton";



const page = async () => {

  const deletedProperties = await getDeletedProperties();

  if (!deletedProperties.data) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col gap-6 relative">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold dark:text-primary backdrop-blur-lg">
            Trash
          </h1>
          <p className="text-base font-normal dark:text-muted-foreground">
            All your deleted projects
          </p>
        </div>
        <DeleteAllButton properties={deletedProperties.data} />
      </div>
      {deletedProperties.data.length > 0 ? (
        <Properties properties={deletedProperties.data} isAdmin={true} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default page;
