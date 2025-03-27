"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { WarpBackground } from "../ui/warp-background";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MessageCircle } from "lucide-react";
import CVDownloadButton from "../cv-download-button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="w-full h-svh ">
      <WarpBackground className="w-full h-full flex justify-center items-center">
        <motion.div
          // className="glass-card p-6 text-center"
          initial={{ scale: 0.25 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, stiffness: 200 }}
        >
          <Card className="w-full h-full bg-background/30 backdrop-blur-sm">
            <CardHeader className="w-full">
              <CardTitle className="w-full text-center text-xl sm:text-2xl lg:text-4xl ">
                <h1>Amirali Motahari</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-4 max-w-lg text-center">
              <CardDescription>
                From crafting seamless user experiences to building scalable
                applications, I combine design and technology to create
                innovative solutions. Let&apos;s build something amazing
                together.
              </CardDescription>
            </CardContent>
            <CardFooter className="w-full flex justify-center items-center gap-4">
              <CVDownloadButton />
              <Button asChild variant={"secondary"}>
                <Link href={"/contact"}>
                  <span>Contact Me</span>
                  <MessageCircle />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </WarpBackground>
    </section>
  );
};

export default Hero;
