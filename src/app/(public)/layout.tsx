import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  
  return <div className="min-h-screen">{children}</div>;
};

export default Layout;
