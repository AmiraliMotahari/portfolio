"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectsType } from "@/lib/types";

type Props = {
  topProjects: ProjectsType;
};

const ProjectCard = ({
  project,
  cardIndex,
}: {
  project: ProjectsType[number];
  cardIndex: number;
}) => {
  return (
    <motion.div
      className="glass-card overflow-hidden group flex flex-col justify-start items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: cardIndex * 0.1 }}
    >
      <div className="w-full relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          placeholder="blur"
          blurDataURL={project.blurData}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="w-full p-6 pb-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
      </div>
      <div className="w-full flex flex-wrap gap-4 p-6 pt-0 mt-auto">
        {project.demoUrl ? (
          <Button asChild variant={"ghost"}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm"
            >
              <ExternalLink className="size-4 mr-1" /> Live Demo
            </a>
          </Button>
        ) : null}
        {project.githubUrl ? (
          <Button asChild variant={"ghost"}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm"
            >
              <Github className="size-4 mr-1" /> Source Code
            </a>
          </Button>
        ) : null}
      </div>
    </motion.div>
  );
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
            <ProjectCard project={project} key={project.id} cardIndex={index} />
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
