"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function DownNavbar() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className=" text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },

    {
      title: "Terminal",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Project",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/krishk317",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/krishkh",
    },
  ];
  return (
    <div className="self-center w-full fixed bottom-10 z-50">
      <div className="flex z-50 items-center justify-center w-full ">
        <FloatingDock
          // only for demo, remove for production
          mobileClassName="translate-y-20"
          items={links}
        />
      </div>
    </div>
  );
}
