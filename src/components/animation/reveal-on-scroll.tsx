"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

export type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
};

const RevealOnScroll = ({
  children,
  className,
  duration = 0.5,
  delay = 0.1,
  once = true,
  amount = 0.5,
}: RevealOnScrollProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: once, amount: amount });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("final");
    }

    return () => {
      controls.stop(); //!test
    };
  }, [controls, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full", className)}
      style={{ perspective: "800px" }}
    >
      <motion.div
        variants={{
          initial: { opacity: 0, y: 75 },
          final: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate={controls}
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealOnScroll;
