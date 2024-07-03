"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import MagicButton from "../ui/magic-button";
import { FaLocationArrow } from "react-icons/fa6";

export default function Hero() {
  const showMyWork = ()=>{}

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h3 className="text-xl md:text-3xl font-extralight dark:text-white text-center">
          Crafting Modern Web Experiences with Next.js
        </h3>
        <h1 className=" font-bold text-3xl md:text-6xl dark:text-neutral-200 py-4 text-center">
          Turning Ideas into Interactive Digital Solutions
        </h1>
        <h4 className="text-md md:text-lg font-extralight dark:text-white text-center">
          Hi! I&apos;m Amirali, a passionate Front-End Developer dedicated to
          building high-performance, user-friendly web applications.
        </h4>
        <a href="#projects">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </motion.div>
    </AuroraBackground>
  );
}
