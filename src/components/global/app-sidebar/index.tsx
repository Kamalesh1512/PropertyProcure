"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
// import RecentOpen from "@/components/global/app-sidebar/recent-open";
import NavFooter from "@/components/global/app-sidebar/nav-footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import NavMain from "@/components/global/app-sidebar/nav-main";
import { data } from "@/lib/constants";
import { InferSelectModel } from "drizzle-orm";
import { LayoutDashboard, LayoutDashboardIcon } from "lucide-react";
import Image from "next/image";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar
      collapsible="icon"
      className="max-w-fit bg-primary-foreground"
      {...props}
    >
      <SidebarHeader className="pt-5 px-2 pb-0">
        <SidebarMenuButton
          size={"lg"}
          className="data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex flex-row justify-between items-center">
            <Image src={"/logo.png"} alt="logo" width={"75"} height={"150"} />
            <span className=" flex flex-col items-center text-sm font-bold">
            <span>
              Property <span className="text-premium text">Procure</span>
            </span>

            <span className="text-xs text-muted-foreground text-wrap">
              procure your dream land with trust
            </span>
          </span>
          </div>

        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className="px-2 mt-10 gap-y-6">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
