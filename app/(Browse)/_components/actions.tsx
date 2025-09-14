"use client";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LogIn } from "lucide-react";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/provider/theme-provider";
function Actions() {
  return (
    <div className=" flex items-center justify-center gap-x-3">
      <SidebarTrigger />
      <SignedOut>
        <ModeToggle />
        <SignInButton>
          <Button size={"sm"}>
            <span className="max-w-md">SignIn</span>
            <LogIn />
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Actions;
