"use client";

import { motion } from "motion/react";

function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] opacity-70"
        animate={{
          x: ["0%", "50%", "-30%", "0%"],
          y: ["0%", "30%", "-20%", "0%"],
          scale: [1, 1.8, 1.3, 1],
          backgroundColor: ["#ec4899", "#a78bfa", "#60a5fa", "#ec4899"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-60"
        animate={{
          x: ["0%", "-60%", "40%", "0%"],
          y: ["0%", "-40%", "30%", "0%"],
          scale: [1.2, 2, 1.5, 1.2],
          backgroundColor: ["#3b82f6", "#10b981", "#f472b6", "#3b82f6"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{ top: "40%", left: "50%" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-[350px] h-[350px] bg-yellow-400 rounded-full mix-blend-screen filter blur-[100px] opacity-50"
        animate={{
          x: ["0%", "30%", "-30%", "0%"],
          y: ["0%", "-20%", "20%", "0%"],
          scale: [1.1, 2, 1.3, 1.1],
          backgroundColor: ["#facc15", "#f43f5e", "#34d399", "#facc15"],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{ top: "70%", left: "20%" }}
      />
    </div>
  );
}

export default GradientBackground;
