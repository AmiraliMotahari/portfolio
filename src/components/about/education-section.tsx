"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { TracingBeam } from "../ui/tracing-beam";

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
                    <h3 className="text-xl font-bold text-neon-green">
                      {item.degree}
                    </h3>
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
                    <span className="text-muted-foreground">
                      {item.location}
                    </span>
                  </div>

                  <p className="mb-6 text-muted-foreground">
                    {item.description}
                  </p>

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
                            <span className="text-muted-foreground">
                              {course}
                            </span>
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
                            <span className="text-muted-foreground">
                              {achievement}
                            </span>
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
  );
}
