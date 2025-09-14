import Logo from "@/components/shared/logo";
import React from "react";
import Action from "./actions";
import Search from "./search";

const AppNavbar = () => {
  return (
    <div className="w-full h-20 bg-sidebar px-2 lg:px-4 shadow-sm">
      <div className="flex items-center justify-between h-full">
        <Logo />
        <Search />
        <Action />
      </div>
    </div>
  );
};

export default AppNavbar;
