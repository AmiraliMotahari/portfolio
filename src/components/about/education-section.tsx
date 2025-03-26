"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      startDate: "2013",
      endDate: "2017",
      description: "Focused on web technologies and human-computer interaction. Graduated with honors.",
      courses: [
        "Advanced Web Development",
        "User Interface Design",
        "Data Structures and Algorithms",
        "Database Systems",
        "Computer Networks",
      ],
      achievements: [
        "Dean's List for Academic Excellence (2015-2017)",
        "Best Final Year Project Award",
        "Student Representative for Computer Science Department",
      ],
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Code Academy",
      location: "Online",
      startDate: "2017",
      endDate: "2017",
      description: "Intensive 12-week program focused on modern web development technologies and practices.",
      courses: [
        "Frontend Development with React",
        "Backend Development with Node.js",
        "Database Design and Implementation",
        "RESTful API Development",
        "Deployment and DevOps",
      ],
      achievements: ["Top Student Award", "Built a full-stack application that was featured in the academy showcase"],
    },
    {
      degree: "UI/UX Design Certification",
      institution: "Design Institute",
      location: "Portland, OR",
      startDate: "2018",
      endDate: "2018",
      description: "Specialized training in user interface and experience design principles and methodologies.",
      courses: [
        "User Research and Testing",
        "Interaction Design",
        "Visual Design Principles",
        "Prototyping and Wireframing",
        "Accessibility in Design",
      ],
      achievements: ["Portfolio selected for institute's annual exhibition", "Mentored junior designers in program"],
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4">
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
                <div className="glass-card p-8 relative">
                  <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-neon-green"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-neon-green">{item.degree}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {item.startDate} - {item.endDate}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="font-medium">{item.institution}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground">{item.location}</span>
                  </div>

                  <p className="mb-6 text-muted-foreground">{item.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center mb-3">
                        <BookOpen className="h-5 w-5 text-neon-green mr-2" />
                        <h4 className="font-semibold">Key Courses</h4>
                      </div>
                      <ul className="space-y-1">
                        {item.courses.map((course, i) => (
                          <li key={i} className="flex items-start">
                            <span className="h-1.5 w-1.5 rounded-full bg-neon-green mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-3">
                        <Award className="h-5 w-5 text-neon-green mr-2" />
                        <h4 className="font-semibold">Achievements</h4>
                      </div>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="h-1.5 w-1.5 rounded-full bg-neon-green mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </TracingBeam>
        </div>
      </div>
    </section>
  )
}

// TracingBeam component
interface TracingBeamProps {
  children: React.ReactNode
}

function TracingBeam({ children }: TracingBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [beamPosition, setBeamPosition] = useState<{ height: number; top: number }>({
    height: 0,
    top: 0,
  })

  useEffect(() => {
    if (!containerRef.current) return

    const calculateBeamPosition = () => {
      if (!containerRef.current) return
      const { height: containerHeight, top: containerTop } = containerRef.current.getBoundingClientRect()

      const viewportHeight = window.innerHeight

      // Calculate the beam position relative to the visible portion
      const beamHeight = containerHeight
      const beamTop = containerTop

      setBeamPosition({
        height: beamHeight,
        top: beamTop,
      })
    }

    calculateBeamPosition()
    window.addEventListener("scroll", calculateBeamPosition)
    window.addEventListener("resize", calculateBeamPosition)

    return () => {
      window.removeEventListener("scroll", calculateBeamPosition)
      window.removeEventListener("resize", calculateBeamPosition)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Beam track */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-muted"></div>

      {/* Animated beam */}
      <motion.div
        className="absolute left-0 w-px bg-neon-green"
        style={{
          height: beamPosition.height,
          top: beamPosition.top,
          boxShadow: "0 0 8px 1px rgba(74, 222, 128, 0.6)",
        }}
      />

      {/* Content */}
      <div className="relative ml-8">{children}</div>
    </div>
  )
}

