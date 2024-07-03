"use client";
import React, { ReactNode } from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { FaCode, FaUniversity } from "react-icons/fa";
import { SiImessage } from "react-icons/si";
import { GoProjectTemplate } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";

export function Navbar({ children }: { children: ReactNode }) {
  const navItems = [
    {
      name: "Project",
      link: "#projects",
      icon: <GoProjectTemplate />,
    },
    {
      name: "Education",
      link: "#education",
      icon: <FaUniversity />,
    },
    {
      name: "Languages",
      link: "#languages",
      icon: <FaCode />,
    },
    {
      name: "Experiences",
      link: "#experiences",
      icon: <MdWorkOutline />,
    },
    {
      name: "Contact Me",
      link: "#contactMe",
      icon: <SiImessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      {children}
    </div>
  );
}
