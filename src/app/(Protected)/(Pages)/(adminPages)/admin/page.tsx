import { getAllProperties } from "@/actions/properties";
import NotFound from "@/components/global/not-found";
import Properties from "@/components/global/properties";
import CreateButton from "@/components/global/upper-info-bar/create-new";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

interface AdminDashboardPageProps{
  searchParams:Promise<{
    name:string,
    city:string,
    price:string,
    propertyType:string
  }>
};

const AdminDashboardPage = async ({searchParams}:AdminDashboardPageProps) => {

  const {name,city,price,propertyType} = await searchParams || {}

  let minPrice, maxPrice
  if (!price) {
    minPrice = 0
    maxPrice = 0
  }
  else{
    [minPrice,maxPrice]=price.split('-').map(Number)
  }
  

  const allProperties = await getAllProperties(name,city,minPrice,maxPrice,propertyType);
  const isAdmin = await checkRole('admin')

  if (!isAdmin) {
    redirect("/")
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="w-full flex flex-col gap-6 relative p-4">
      <div className="flex justify-between items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold dark:text-primary backdrop-blur-lg">
            Properties
          </h1>
          <p className="text-base font-normal dark:text-muted-foreground">
            All of your Properties at one place
          </p>
        </div>
        {isAdmin? <CreateButton/>:<></>}
      </div>
      {/* properties */}
      { allProperties.data && allProperties.data.length > 0 ? (
        <Properties properties={allProperties.data} isAdmin = {isAdmin}/>
      ):(
        <>
        {/* <Projects projects={allProjects.data}/> */}
        <NotFound/>
        </>
      ) }
    </div>
    </Suspense>
  );
};

export default AdminDashboardPage;
