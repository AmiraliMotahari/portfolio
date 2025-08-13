"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import { motion, Transition } from "motion/react";

/**
 * GradientBackground
 * - GPU/CPU friendly defaults: animates transform & opacity (compositeable properties) only
 * - Optional color animation (disabled by default to avoid repaints) — enable with `animateColors`
 * - Accepts a `blobs` array to make behavior fully dynamic & reusable
 *
 * Props:
 *  - blobs: Array of blob configs (see defaultBlobs for fields)
 *  - className: additional wrapper classes
 *  - animateColors: boolean (false by default)
 *  - reducedMotion: boolean (if true stops animations)
 */

const defaultBlobs = [
  {
    id: "b1",
    sizeClass: "size-[400px]",
    opacity: 0.7,
    top: "10%",
    left: "10%",
    colorStops: ["#ec4899", "#a78bfa", "#60a5fa", "#ec4899"],
    keyframes: {
      x: ["0%", "50%", "-30%", "0%"],
      y: ["0%", "30%", "-20%", "0%"],
      scale: [1, 1.8, 1.3, 1],
      duration: 35,
      ease: "easeInOut",
    },
  },
  {
    id: "b2",
    sizeClass: "size-[500px]",
    opacity: 0.6,
    top: "40%",
    left: "50%",
    colorStops: ["#3b82f6", "#10b981", "#f472b6", "#3b82f6"],
    keyframes: {
      x: ["0%", "-60%", "40%", "0%"],
      y: ["0%", "-40%", "30%", "0%"],
      scale: [1.2, 2, 1.5, 1.2],
      duration: 40,
      ease: "easeInOut",
    },
  },
  {
    id: "b3",
    sizeClass: "size-[350px]",
    opacity: 0.5,
    top: "70%",
    left: "20%",
    colorStops: ["#facc15", "#f43f5e", "#34d399", "#facc15"],
    keyframes: {
      x: ["0%", "30%", "-30%", "0%"],
      y: ["0%", "-20%", "20%", "0%"],
      scale: [1.1, 2, 1.3, 1.1],
      duration: 50,
      ease: "easeInOut",
    },
  },
];

function GradientBackground({
  blobs = defaultBlobs,
  className = "",
  animateColors = true, // keep false by default to avoid repaints
  reducedMotion = false, // programmatic opt-out for animations
}) {
  const baseClasses =
    "absolute rounded-full mix-blend-screen filter blur-3xl opacity-70 will-change-[transform,opacity] translate-z-0 backface-hidden isolate contain-paint pointer-events-none";

  // memoize the animation objects so they are stable between renders
  const rendered = useMemo(() => {
    return blobs.map((b) => {
      const { id, sizeClass, opacity, top, left, colorStops, keyframes } = b;

      // build animate object (avoid animating backgroundColor by default)
      const animate = {
        x: keyframes.x,
        y: keyframes.y,
        scale: keyframes.scale,
        // only include backgroundColor if animateColors === true
        ...(animateColors && { backgroundColor: colorStops }),
      };

      // if reduced motion requested, don't animate
      const transition: Transition = reducedMotion
        ? { duration: 0 }
        : {
            duration: keyframes.duration ?? 30,
            repeat: Infinity,
            repeatType: "mirror",
            ease: keyframes.ease ?? "easeInOut",
          };

      // inline style for placement + opacity (keeps tailwind size classes intact)
      const style = { top, left, opacity };

      return {
        id,
        animate,
        transition,
        className: cn(baseClasses, sizeClass),
        style,
      };
    });
  }, [blobs, animateColors, reducedMotion]);

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden bg-background motion-reduce:animate-none motion-reduce:transition-none",
        className
      )}
      aria-hidden="true"
    >
      {rendered.map((r) => {
        return (
          <motion.div
            key={r.id}
            className={r.className}
            animate={r.animate}
            transition={r.transition}
            style={r.style}
          />
        );
      })}
    </div>
  );
}

export default React.memo(GradientBackground);
