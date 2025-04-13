"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CVDownloadButton from "@/components/cv-download-button";
import { defaultImage } from "@/lib/constants/images";

type Props = {
  profilePicture: string;
  blurData:string
};

export default function AboutHero({ profilePicture, blurData }: Props) {
  return (
    <section className="relative pt-32 pb-20 px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
              About Me
            </h1>

            <p className="text-xl mb-8 text-muted-foreground">
              I&apos;m a creative developer with a passion for building
              beautiful, functional, and accessible web experiences. With over 5
              years of experience in web development, I specialize in creating
              interactive applications that combine cutting-edge technology with
              thoughtful design.
            </p>

            <p className="text-xl mb-8 text-muted-foreground">
              My approach combines technical expertise with creative
              problem-solving, allowing me to deliver solutions that not only
              meet requirements but exceed expectations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center lg:justify-start">
              <Button variant={"secondary"}>Contact Me</Button>
              <CVDownloadButton />
            </div>
          </motion.div>

          <motion.div
            className="w-1/3 lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-green to-neon-red rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <div className="glass-card rounded-2xl overflow-hidden relative">
                <Image
                  src={profilePicture || defaultImage}
                  alt="Amirali Motahari"
                  width={600}
                  height={600}
                  placeholder="blur"
                  blurDataURL={blurData}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
