import AppSidebar from "@/components/global/app-sidebar";
import UpperInfoBar from "@/components/global/upper-info-bar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { checkRole } from "@/utils/roles";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const PropertiesListingLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <UpperInfoBar />
        <div className="p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default PropertiesListingLayout;
