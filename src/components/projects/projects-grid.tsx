"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectsType } from "@/lib/types";
import { defaultImage } from "@/lib/constants/images";
import { Button } from "../ui/button";

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
              className="glass-card overflow-hidden group h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || defaultImage}
                  alt={project.title}
                  width={800}
                  height={600}
                  placeholder="blur"
                  blurDataURL={project.blurData}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured ? (
                  <Badge variant={"default"} className="absolute top-4 right-4">
                    Featured
                  </Badge>
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto">
                  {project.demoUrl ? (
                    <Button asChild variant={"ghost"}>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                      </a>
                    </Button>
                  ) : null}
                  {project.githubUrl ? (
                    <Button asChild variant={"ghost"}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" /> Source Code
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
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
