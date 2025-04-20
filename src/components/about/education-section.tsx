"use client";

import type React from "react";

import { motion } from "motion/react";
import { useRef } from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import GradientBackground from "@/components/ui/gradient-background";
import EducationCard from "@/components/cards/education-card";

type Props = {
  education: {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    courses: string[];
    achievements: string[];
  }[];
};

export default function EducationSection({ education }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-background/50 relative">
      <GradientBackground />

      <div className="container mx-auto dynamic-px">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education & Certifications
        </motion.h2>

        <div className="max-w-4xl mx-auto relative" ref={containerRef}>
          {/* Tracing Beam */}
          <TracingBeam>
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="mb-16 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EducationCard data={item} />
              </motion.div>
            ))}
          </TracingBeam>
        </div>
      </div>
    </section>
  );
}
