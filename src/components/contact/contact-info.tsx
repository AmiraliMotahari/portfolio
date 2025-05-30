"use client";

import { PersonalInfoType, SocialsType } from "@/lib/types";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  socials: SocialsType;
  personalInfo: PersonalInfoType;
};

export default function ContactInfo({ personalInfo, socials }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <p className="text-muted-foreground mb-8">
        Feel free to reach out if you have any questions or want to work
        together. I&apos;m always open to discussing new projects, creative
        ideas, or opportunities to be part of your vision.
      </p>

      <div className="flex flex-col justify-start items-start gap-4 text-center mb-12">
        <address className="font-normal not-italic flex justify-items-start gap-2">
          <MapPin />
          {personalInfo.location}
        </address>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            <h4 className="text-lg font-medium">Follow Me</h4>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <a
              href={`${socials.find((elem) => elem.title === "GitHub")?.href}`}
              className="text-muted-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href={`${socials.find((elem) => elem.title === "LinkedIn")?.href}`}
              className="text-muted-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
