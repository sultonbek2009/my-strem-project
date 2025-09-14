import { SidebarProvider } from "@/components/ui/sidebar";
import { RootLayoutProps } from "@/types";
import React from "react";
import { AppSidebar } from "./_components/sidebar/app-sidebar";
import AppNavbar from "./_components/app-navbar";
import { ClerkProvider } from "@clerk/nextjs";

const Layout = ({ children }: RootLayoutProps) => {
  return (
    <ClerkProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full h-full">
          <AppNavbar />
          {children}
        </main>
      </SidebarProvider>
    </ClerkProvider>
  );
};

export default Layout;
