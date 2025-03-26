"use client";

import { motion } from "motion/react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "../ui/particles";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  contactData: {
    email: string;
    location: string;
  };
  socials: {
    title: string;
    href: string;
  }[];
};

export default function Contact({ contactData }: Props) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <section className="py-20 px-12 relative">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg mx-auto"
        >
          <Card className="">
            <CardHeader>
              <CardTitle>
                <h3 className="text-2xl font-semibold text-center">
                  Contact Information
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Feel free to reach out if you have any questions or want to work
                together. I&apos;m always open to discussing new projects,
                creative ideas, or opportunities to be part of your vision.
              </p>
            </CardContent>
            <CardFooter className="flex-col justify-center items-center gap-8">
              <div className="flex flex-col justify-center items-center gap-4 text-center">
                <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                <address className="font-normal not-italic">
                  {contactData.location}
                </address>
              </div>
              <Button asChild variant={"default"}>
                <Link href={"/contact"}>
                  <span>Contact Me</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
