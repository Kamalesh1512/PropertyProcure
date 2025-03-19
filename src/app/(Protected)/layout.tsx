import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    redirect("/");
  }

  return <div className="min-h-screen">{children}</div>;
};

export default Layout;
