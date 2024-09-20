"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-5 right-10 z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Web Development</HoveredLink>
            <HoveredLink href="#">UI/UX</HoveredLink>
            <HoveredLink href="#">Tests</HoveredLink>
            <HoveredLink href="#">AI/ML</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col  text-sm gap-10 p-4">
            <ProductItem
              title="Kaizen Tech Society"
              href="https://www.kaizentechsociety.xyz/"
              src="/kaizenCart.jpg"
              description="A platform where tech enthusiasts can showcase their projects and collaborate with others."
            />
            <ProductItem
              title="Kaizen Tech Society"
              href="https://www.kaizentechsociety.xyz/"
              src="/kaizenCart.jpg"
              description="A platform where tech enthusiasts can showcase their projects and collaborate with others."
            />
            <ProductItem
              title="Kaizen Tech Society"
              href="https://www.kaizentechsociety.xyz/"
              src="/kaizenCart.jpg"
              description="A platform where tech enthusiasts can showcase their projects and collaborate with others."
            />
            <ProductItem
              title="Kaizen Tech Society"
              href="https://www.kaizentechsociety.xyz/"
              src="/kaizenCart.jpg"
              description="A web3 social media platform for developers."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col gap-4">
            <ProductItem
              href="https://www.instagram.com/krishk317/"
              src="/icons/insta.png"
              description="Instagram"
              imageClassName="w-8 h-8"
            />
            <ProductItem
              href="https://leetcode.com/KrishnaVeni/"
              src="/icons/leetcode.png"
              description="LeetCode"
              imageClassName="w-8 h-8"
            />
            <ProductItem
              href="https://github.com/krishkh"
              src="/icons/github.png"
              description="GitHub"
              imageClassName="w-8 h-8"
            />
            <ProductItem
              href="https://github.com/KrishnaVeni"
              src="/icons/linkedin.png"
              description="GitHub"
              imageClassName="w-8 h-8"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
