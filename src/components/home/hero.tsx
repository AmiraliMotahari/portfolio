"use client";

import { Button } from "@/components/ui/button";
import { WarpBackground } from "@/components/ui/warp-background";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import CVDownloadButton from "@/components/cv-download-button";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";

type Props = {
  title: string;
  description: string;
  contactButton: string;
};

const Hero = ({ title, description, contactButton }: Props) => {
  return (
    <section className="w-full h-svh">
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
                <h1>{title}</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-4 max-w-lg text-center">
              <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="w-full flex justify-center items-center gap-4">
              <CVDownloadButton />
              <Button asChild variant={"secondary"}>
                <Link href={"/contact"}>
                  <span>{contactButton}</span>
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
