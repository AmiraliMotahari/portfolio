"use client";

import { motion } from "motion/react";
import ExperienceCard from "@/components/cards/experience-card";

type Props = {
  experiences: {
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }[];
};

export default function ExperienceTimeline({ experiences }: Props) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto dynamic-px relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto flex flex-col justify-start items-center gap-12">
          {experiences.map((elem, i) => (
            <motion.div
              key={`experience-card-${i}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ExperienceCard experience={elem} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
