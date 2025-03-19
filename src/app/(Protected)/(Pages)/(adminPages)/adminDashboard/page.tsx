import { getAllProperties } from "@/actions/properties";
import NotFound from "@/components/global/not-found";
import Properties from "@/components/global/properties";
import React from "react";

const DashboardPage = async () => {
  const allProperties = await getAllProperties();
  return (
    <div className="w-full flex flex-col gap-6 relative p-4">
      <div className="flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold dark:text-primary backdrop-blur-lg">
            Properties
          </h1>
          <p className="text-base font-normal dark:text-muted-foreground">
            All of your Properties at one place
          </p>
        </div>
      </div>
      {/* properties */}
      { allProperties.data && allProperties.data.length > 0 ? (
        <Properties properties={allProperties.data}/>
      ):(
        <>
        {/* <Projects projects={allProjects.data}/> */}
        <NotFound/>
        </>
      ) }
    </div>
  );
};

export default DashboardPage;
