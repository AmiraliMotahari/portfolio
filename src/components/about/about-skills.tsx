"use client";

import { motion } from "motion/react";
import {
  Code,
  Palette,
  Lightbulb,
  Rocket,
  Server,
  Globe,
  Lock,
  Cpu,
} from "lucide-react";

const categories = [
  {
    title: "Frontend Development",
    icon: <Code className="h-8 w-8 text-neon-green" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Design",
    icon: <Palette className="h-8 w-8 text-neon-green" />,
    skills: ["Figma", "Adobe Illustrator", "Adobe Premiere"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-8 w-8 text-neon-green" />,
    skills: ["Node.js", "SQL", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Performance Optimization",
    icon: <Rocket className="h-8 w-8 text-neon-green" />,
    skills: [
      "Caching Strategies",
      "Code Splitting",
      "Lazy Loading",
      "Image Optimization",
    ],
  },
  {
    title: "Global Deployment",
    icon: <Globe className="h-8 w-8 text-neon-green" />,
    skills: ["Vercel", "Netlify", "AWS",],
  },
  {
    title: "Security",
    icon: <Lock className="h-8 w-8 text-neon-green" />,
    skills: [
      "Authentication",
      "Authorization",
      "Data Encryption",
      "HTTPS",
      "Security Headers",
    ],
  },
  {
    title: "Problem Solving",
    icon: <Lightbulb className="h-8 w-8 text-neon-green" />,
    skills: [
      "Algorithms",
      "Data Structures",
      "Debugging",
      "Performance Analysis",
      "Technical Documentation",
    ],
  },
  {
    title: "Emerging Technologies",
    icon: <Cpu className="h-8 w-8 text-neon-green" />,
    skills: [
      "AI Integration",
      "Edge Computing",
      "Progressive Web Apps",
      "AR/VR Web Experiences",
    ],
  },
];
// Animation variants for the progress bar
const progressBarVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1,
      delay: 0.3,
      type: "spring",
      stiffness: 50,
      damping: 10,
      bounce: 0.5,
    },
  }),
};

type Props = {
  skills: {
    name: string;
    level: number;
  }[];
};
export default function AboutSkills({ skills }: Props) {
  return (
    <section className="py-20 dynamic-px bg-background/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-x-6 gap-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: (i) => ({
                      opacity: 1,
                      transition: { delay: i * 0.1 },
                    }),
                  }}
                >
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-neon-green">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-neon-green to-neon-red"
                      variants={progressBarVariants}
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Areas of Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.slice(0,4).map((category, index) => (
                <motion.div
                  key={category.title}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h4 className="text-lg font-semibold ml-3">
                      {category.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-muted-foreground flex items-center"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-neon-green mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {categories.slice(4).map((category, index) => (
            <motion.div
              key={category.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h4 className="text-lg font-semibold ml-3">{category.title}</h4>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-green mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
