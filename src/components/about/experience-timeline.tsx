"use client";

import { motion } from "motion/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Award, Building2, Calendar, Cpu, MapPin } from "lucide-react";
import { BorderBeam } from "../ui/border-beam";

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

const ExperienceCard = (experience: {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}) => {
  return (
    <Card className="relative">
      {/* <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-neon-green"></div> */}
      <CardHeader className="relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <CardTitle>
            <h3 className="text-xl font-bold text-neon-green">
              {experience.position}
            </h3>
          </CardTitle>
          <CardDescription className="flex items-center text-sm text-muted-foreground">
            <Calendar className="size-4 mr-1" />
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center mb-4">
          <Building2 className="size-4 text-muted-foreground mr-2" />
          <span className="font-medium">{experience.company}</span>
          <span className="mx-2">•</span>
          <MapPin className="size-4 text-muted-foreground mr-2" />
          <span className="font-medium">{experience.location}</span>
        </div>

        <p className="mb-6 text-muted-foreground">{experience.description}</p>
      </CardContent>

      <CardFooter>
        <div className="flex flex-col justify-start items-start gap-6">
          {/* Achievements */}
          <div>
            <div className="flex items-center mb-3">
              <Award className="size-5 text-neon-green mr-2" />
              <h4 className="font-semibold">Achievements</h4>
            </div>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-green mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <div className="flex items-center mb-3">
              <Cpu className="size-5 text-neon-green mr-2" />
              <h4 className="font-semibold">Key Technologies</h4>
            </div>
            <ul className="space-y-1">
              {experience.technologies.map((course, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-green mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardFooter>
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-neon-green to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        className="from-transparent via-neon-red to-transparent"
      />
    </Card>
  );
};

export default function ExperienceTimeline({ experiences }: Props) {
  return (
    <section className="py-20 relative overflow-hidden">
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
              <ExperienceCard {...elem} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
