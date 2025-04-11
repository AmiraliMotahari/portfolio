"use client"

import { useState } from "react"
import { motion } from "motion/react";
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/assets/images/placeholder.svg",
      category: "Web",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creative professionals with animations and dark mode.",
      image: "/assets/images/placeholder.svg",
      category: "Design",
      tags: ["React", "Framer Motion", "Styled Components"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A mobile app for managing tasks, projects, and team collaboration with real-time updates.",
      image: "/assets/images/placeholder.svg",
      category: "Mobile",
      tags: ["React Native", "Firebase", "Redux"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "AI Content Generator",
      description:
        "A web application that uses AI to generate content for blogs, social media, and marketing materials.",
      image: "/assets/images/placeholder.svg",
      category: "Web",
      tags: ["Next.js", "OpenAI API", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "3D Product Configurator",
      description: "Interactive 3D product configurator allowing users to customize products in real-time.",
      image: "/assets/images/placeholder.svg",
      category: "3D",
      tags: ["Three.js", "React", "WebGL"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Financial Dashboard",
      description:
        "Data visualization dashboard for financial analytics with real-time updates and interactive charts.",
      image: "/assets/images/placeholder.svg",
      category: "UI/UX",
      tags: ["React", "D3.js", "Material UI"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 7,
      title: "Social Media App",
      description: "Mobile-first social media application with real-time messaging and content sharing.",
      image: "/assets/images/placeholder.svg",
      category: "Mobile",
      tags: ["React Native", "GraphQL", "AWS Amplify"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 8,
      title: "Design System",
      description: "Comprehensive design system with components, guidelines, and documentation for consistent UIs.",
      image: "/assets/images/placeholder.svg",
      category: "Design",
      tags: ["Figma", "Storybook", "React"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="py-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card overflow-hidden group h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-neon-green text-black text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-neon-green text-neon-green">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-neon-green hover:text-neon-red transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-neon-green hover:text-neon-red transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-4">No projects found</h3>
            <p className="text-muted-foreground mb-6">No projects match the selected filter. Try another category.</p>
            <Button
              variant="outline"
              className="border-neon-green text-neon-green hover:bg-neon-green/10"
              onClick={() => setActiveFilter("All")}
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

