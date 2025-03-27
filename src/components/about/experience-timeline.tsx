"use client";

import { motion } from "framer-motion";
import { NeonGradientCard } from "../ui/neon-gradient-card";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Timeline } from "../ui/timeline";

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
  const data = experiences.map((elem, i) => {
    return {
      title: elem.startDate,
      content: (
        <NeonGradientCard key={`experience-card-${i}`}>
          <CardHeader>
            <CardTitle>{elem.position}</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{elem.description}</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </NeonGradientCard>
      ),
    };
  });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline items */}
          <div className="w-full">
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
