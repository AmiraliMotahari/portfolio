"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function ExperienceTimeline() {
  const experiences = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2021",
      endDate: "Present",
      description:
        "Lead developer for client projects, focusing on creating performant and accessible web applications. Implemented modern frontend architectures using React and Next.js.",
      achievements: [
        "Reduced load time by 40% through performance optimizations",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored junior developers and led technical workshops",
        "Developed component library used across multiple projects",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    },
    {
      position: "Frontend Developer",
      company: "Digital Solutions Agency",
      location: "Portland, OR",
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      description:
        "Developed responsive websites and web applications for various clients across different industries.",
      achievements: [
        "Created interactive data visualizations for financial dashboard",
        "Built e-commerce platform with custom checkout flow",
        "Implemented design system used across multiple projects",
        "Optimized website performance achieving 95+ Lighthouse scores",
      ],
      technologies: ["JavaScript", "React", "SCSS", "Redux", "REST APIs"],
    },
    {
      position: "Web Developer Intern",
      company: "StartUp Ventures",
      location: "Seattle, WA",
      startDate: "Jun 2017",
      endDate: "Feb 2018",
      description: "Assisted in the development of web applications and learned modern development practices.",
      achievements: [
        "Contributed to open-source projects",
        "Developed landing pages for marketing campaigns",
        "Created interactive prototypes for user testing",
        "Assisted with UX research and user interviews",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    },
  ]

  const [activeItem, setActiveItem] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timelineRect = timelineRef.current.getBoundingClientRect()
      const timelineMiddle = timelineRect.top + timelineRect.height / 2

      let closestItem = 0
      let closestDistance = Number.POSITIVE_INFINITY

      itemRefs.current.forEach((item, index) => {
        if (!item) return

        const itemRect = item.getBoundingClientRect()
        const itemMiddle = itemRect.top + itemRect.height / 2
        const distance = Math.abs(timelineMiddle - itemMiddle)

        if (distance < closestDistance) {
          closestDistance = distance
          closestItem = index
        }
      })

      setActiveItem(closestItem)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <div className="relative" ref={timelineRef}>
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-muted transform md:-translate-x-px"></div>

            {/* Timeline glow effect */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neon-green/50 transform md:-translate-x-px blur-sm"></div>

            {/* Timeline items */}
            {experiences.map((experience, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={cn(
                  "relative mb-12 md:mb-24",
                  index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-0" : "md:pl-12 md:mr-auto md:ml-0",
                  "md:w-1/2",
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-6 h-6 rounded-full bg-background border-2 border-muted flex items-center justify-center transform -translate-x-1/2 md:translate-x-1/2">
                  <div
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors duration-300",
                      activeItem === index ? "bg-neon-green" : "bg-muted",
                    )}
                  ></div>
                </div>

                {/* Content card */}
                <motion.div
                  className="glass-card p-6 ml-8 md:ml-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-neon-green">{experience.position}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {experience.startDate} - {experience.endDate}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Briefcase className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="font-medium">{experience.company}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground">{experience.location}</span>
                  </div>

                  <p className="mb-4 text-muted-foreground">{experience.description}</p>

                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1 mb-4">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-neon-green mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

