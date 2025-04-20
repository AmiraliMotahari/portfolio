"use client";

import { motion } from "motion/react";
import { ProjectsType } from "@/lib/types";
import ProjectCard from "../cards/project-card";

type Props = {
  projects: ProjectsType;
};

export default function ProjectsGrid({ projects }: Props) {
  return (
    <section className="pt-10 pb-20 dynamic-px">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-4">No projects found</h3>
          </div>
        ) : null}
      </div>
    </section>
  );
}
