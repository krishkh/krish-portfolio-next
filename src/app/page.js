"use client";
// import { Card } from "@/components/Card";
import Footer from "@/components/Footer";
import { ModeButton } from "@/components/ModeButton";
import NameSection from "@/components/NameSection";
// import Navbar from "@/components/Navbar";
import ProjectCollection from "@/components/ProjectCollection";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <BackgroundLines className="flex items-center bg-[#fdf0d5] dark:bg-black justify-center flex-col">
      <div className="flex flex-col  items-center justify-items-center min-h-screen">
        <ModeButton />
        {/* <Navbar /> */}
        <NameSection />
        <ProjectCollection />
        <Footer />

        {/* <DownNavbar /> */}
      </div>
    </BackgroundLines>
  );
}
