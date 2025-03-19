import AppSidebar from "@/components/global/app-sidebar";
import UpperInfoBar from "@/components/global/upper-info-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import React from "react";

const AdminDashboardLayout = async ({ children }: { children: React.ReactNode }) => {

  const isAdmin = await checkRole('admin')
  if (!isAdmin) {
    redirect("/");
  }

  return(
  <SidebarProvider>
    <AppSidebar/>
    <SidebarInset>
      <UpperInfoBar/>
      <div className="p-4">{children}</div>
    </SidebarInset>
  </SidebarProvider>)
};

export default AdminDashboardLayout;
