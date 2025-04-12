"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Code, Palette, Lightbulb, Rocket } from "lucide-react";
import { defaultImage } from "@/lib/constants/images";
import { PersonalInfoType } from "@/lib/types";

const abilities = [
  {
    icon: <Code size={32} />,
    title: "Clean Code",
    description: "Writing maintainable, efficient, and well-documented code",
  },
  {
    icon: <Palette size={32} />,
    title: "Creative Design",
    description:
      "Blending aesthetics with functionality for engaging experiences",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Problem Solving",
    description: "Finding innovative solutions to complex challenges",
  },
  {
    icon: <Rocket size={32} />,
    title: "Fast Delivery",
    description: "Efficient workflows for timely project completion",
  },
];

type Props = {
  personalInfo: PersonalInfoType;
};

export default function About({ personalInfo }: Props) {
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
            className="xl:row-span-2"
          >
            <div className="glass-card p-1 rounded-2xl overflow-hidden relative">
              <Image
                src={personalInfo.picture || defaultImage}
                alt="Profile"
                width={600}
                height={600}
                className="rounded-2xl w-full h-auto"
              />
              {/* <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-xl backdrop-blur-md">
                <p className="font-medium text-lg">{personalInfo.name}</p>
                <p className="text-sm text-muted-foreground">
                  {personalInfo.title}
                </p>
              </div> */}
            </div>
          </motion.div>

          <div className="">
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
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My approach combines technical expertise with creative
              problem-solving, allowing me to deliver solutions that not only
              meet requirements but exceed expectations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:col-span-full xl:col-span-1">
            {abilities.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center hover:border-foreground"
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
      </div>
    </section>
  );
}
