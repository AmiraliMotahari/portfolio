"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiCplusplus,
  SiCsharp,
  SiNextdotjs,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { Boxes } from "../ui/background-boxes";
import { RiTailwindCssFill } from "react-icons/ri";

const languages = [
  {
    name: "HTML",
    title: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    title: "CSS",
    icon: <FaCss3 />,
  },
  {
    name: "JS",
    title: "JS",
    icon: <IoLogoJavascript />,
  },
  {
    name: "Ts",
    title: "Ts",
    icon: <SiTypescript />,
  },
  {
    name: "React.js",
    title: "React.js",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    title: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Bootstrap",
    title: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    name: "TailwindCss",
    title: "TailwindCss",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Shadcn Ui",
    title: "Shadcn Ui",
    icon: <SiShadcnui />,
  },
  {
    name: "C++",
    title: "C++",
    icon: <SiCplusplus />,
  },
  {
    name: "C#",
    title: "C#",
    icon: <SiCsharp />,
  },
  {
    name: "Python",
    title: "Python",
    icon: <FaPython />,
  },
  {
    name: "Java",
    title: "Java",
    icon: <FaJava />,
  },
];

export function Languages() {
  return (
    <section
      id="languages"
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden gap-y-10 z-20"
    >
      <Boxes />
      <h2 className="heading z-20">Languages & Frameworks</h2>
      <InfiniteMovingCards
        items={languages}
        direction="right"
        speed="slow"
        className="z-20"
      />
    </section>
  );
}

export default Languages;
