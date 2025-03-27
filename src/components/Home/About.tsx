"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import { Code, Palette, Lightbulb, Rocket } from "lucide-react";
import { defaultImage } from "@/lib/constants/images";

const abilities = [
  {
    icon: <Code className="h-8 w-8 text-neon-green" />,
    title: "Clean Code",
    description: "Writing maintainable, efficient, and well-documented code",
  },
  {
    icon: <Palette className="h-8 w-8 text-neon-green" />,
    title: "Creative Design",
    description:
      "Blending aesthetics with functionality for engaging experiences",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-neon-green" />,
    title: "Problem Solving",
    description: "Finding innovative solutions to complex challenges",
  },
  {
    icon: <Rocket className="h-8 w-8 text-neon-green" />,
    title: "Fast Delivery",
    description: "Efficient workflows for timely project completion",
  },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

// Animation variants for the progress bar
const progressBarVariants: Variants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1,
      delay: 0.3,
      type: "spring",
      stiffness: 50,
      damping: 10,
      bounce: 0.25,
    },
  }),
};

type Props = {
  userImageUrl: string;
  skills: {
    name: string;
    level: number;
  }[];
};

export default function About({ userImageUrl, skills }: Props) {
  return (
    <section id="about" className="py-20 px-12">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* User Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-1 rounded-2xl overflow-hidden">
              <Image
                src={userImageUrl || defaultImage}
                alt="Profile"
                width={600}
                height={600}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </motion.div>

          <div>
            {/* Description */}
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I&apos;m a creative developer with a passion for building
              beautiful, functional, and accessible web experiences. With over 5
              years of experience in web development, I specialize in creating
              interactive applications that combine cutting-edge technology with
              thoughtful design.
            </motion.p>

            <motion.p
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My approach combines technical expertise with creative
              problem-solving, allowing me to deliver solutions that not only
              meet requirements but exceed expectations.
            </motion.p>

            {/* Skills */}
            <div className="space-y-6 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-neon-green">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-neon-green to-neon-red transition duration-300"
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={progressBarVariants}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Abilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {abilities.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
