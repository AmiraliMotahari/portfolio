"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export default function HeroAnimated({
  title,
  description,
  children,
  className,
}: Props) {
  return (
    <section className={cn("relative", className)}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">{description}</p>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
