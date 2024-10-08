"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export function Card({ project }) {
  return (
    <div className="mt-20 mx-6">
      {/* <div className=""> */}
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={project.image}
          alt={project.name}
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {project.name}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>
        <Link
          href={project.link}
          className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
        >
          <span>Prototype here.. </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {project.price}
          </span>
        </Link>
      </BackgroundGradient>
    </div>
  );
}
