import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { CircleGauge } from "lucide-react";
import Link from "next/link";
import Navigation from "./navigation";
import Following from "./following";
import Recommeded from "./recommeded";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <Navigation />
        <Following />
        <SidebarSeparator />
        <Recommeded />
      </SidebarContent>
      <SidebarFooter>
        <Button size={"lg"} className=" rounded-lg" asChild>
          <Link href={"/u/"}>
            <span>View Profil</span>
            <CircleGauge />
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
