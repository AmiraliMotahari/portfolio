"use client";

import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Amirali Motahari
        </motion.h1>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full max-w-xl text-center text-gray-400"
        >
          <p>
            From crafting seamless user experiences to building scalable
            applications, I combine design and technology to create innovative
            solutions. Let&apos;s build something amazing together.
          </p>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default Hero;
