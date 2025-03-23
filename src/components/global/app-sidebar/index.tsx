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
import NavFooter from "@/components/global/app-sidebar/nav-footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import NavMain from "@/components/global/app-sidebar/nav-main";
import { data, publicData } from "@/lib/constants";
import { InferSelectModel } from "drizzle-orm";
import Image from "next/image";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  isAdmin?: Promise<boolean> | boolean;
}

const AppSidebar = ({isAdmin, ...props }: AppSidebarProps) => {
  return (
    <Sidebar
      collapsible="icon"
      className="max-w-fit bg-primary-foreground"
      {...props}
    >
      <SidebarHeader className="pt-5 px-2 pb-0">
        <SidebarMenuButton
          size={"lg"}
          className="data-[state=open]:text-sidebar-accent-foreground gap-5"
        >
          {/* <div className="flex flex-row justify-between items-center"> */}
          <div className="flex aspect-square size-16 items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <Image src={"/logo.png"} alt="logo" width={"75"} height={"150"} />
            </div>
            <span className=" flex flex-col items-center text-sm font-bold">
            <span>
              Property <span className="text-premium text">Procure</span>
            </span>

            <span className="text-xs text-muted-foreground text-wrap">
              procure your dream property with trust
            </span>
          </span>
          {/* </div> */}

        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className="px-2 mt-10 gap-y-6">
        {isAdmin ? (<NavMain items={data.navMain} />): (<NavMain items={publicData.navMain } />)}
        
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
