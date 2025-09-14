"use client";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navigation_links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navigation() {
  const pathname = usePathname();
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Pagee</SidebarGroupLabel>
        <SidebarContent>
          <SidebarMenu>
            {navigation_links.map((item) => (
              <SidebarMenuItem key={item.route}>
                <SidebarMenuButton asChild isActive={item.route === pathname}>
                  <Link href={item.route}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </SidebarGroup>
    </>
  );
}

export default Navigation;
