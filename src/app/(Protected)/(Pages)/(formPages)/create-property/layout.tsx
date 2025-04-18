import AppSidebar from "@/components/global/app-sidebar";
import UpperInfoBar from "@/components/global/upper-info-bar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import React from "react";

const CreeatePropertyFormLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <AppSidebar isAdmin={isAdmin} />
      <SidebarInset>
        <SidebarTrigger className="m-5" />
        <Separator orientation="vertical" className="mr-2 h-2" />
        <div className="p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default CreeatePropertyFormLayout;
