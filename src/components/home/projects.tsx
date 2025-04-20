"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectsType } from "@/lib/types";
import ProjectCard from "@/components/cards/project-card";

type Props = {
  topProjects: ProjectsType;
};

export default function Projects({ topProjects }: Props) {
  return (
    <section id="projects" className="py-20 dynamic-px">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button variant="outline">
              View All Projects <ChevronRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
