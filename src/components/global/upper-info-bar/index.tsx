import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import SearchBar from "@/components/global/upper-info-bar/upper-info-searchbar";
import { InferSelectModel } from "drizzle-orm";
import React from "react";
import ThemeSwitcher from "@/components/global/mode-toggle";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import CreateButton from "./create-new";



const UpperInfoBar = () => {
  return (

    <header className="sticky top-0 z-[10] flex shrink-0 flex-wrap items-center gap-2 bg-background p-4 justify-between">
      <SidebarTrigger className="ml-1" />
      <Separator orientation="vertical" className="mr-2 h-2" />
      <div className="w-full max-w-[95%] flex flex-wrap items-center justify-center gap-2">
        <SearchBar />
        <ThemeSwitcher />
        <div className="flex flex-wrap gap-4 items-center justify-end">
        <CreateButton/>
        </div>
      </div>
    </header>
  );
};

export default UpperInfoBar;
