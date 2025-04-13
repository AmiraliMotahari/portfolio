import type { Metadata } from "next";
import AboutHero from "@/components/about/about-hero";
import AboutSkills from "@/components/about/about-skills";
import EducationSection from "@/components/about/education-section";
import ExperienceTimeline from "@/components/about/experience-timeline";
import { user } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about my background, skills, and experience as a creative developer.",
  openGraph: {
    title: "About Me | Amirali Motahari",
    description:
      "Learn more about my background, skills, and experience as a creative developer.",
    url: new URL("/about", process.env.NEXT_PUBLIC_URL),
    images: [
      {
        url: new URL(
          "/assets/images/amirali-motahari.jpeg",
          process.env.NEXT_PUBLIC_URL
        ),
        width: 400,
        height: 280,
        alt: "About Amirali Motahari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me| Amirali Motahari",
    description:
      "Learn more about my background, skills, and experience as a creative developer.",
    images: new URL(
      "/assets/images/amirali-motahari.jpeg",
      process.env.NEXT_PUBLIC_URL
    ),
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/about`,
  },
};

export default function AboutPage() {
  const { personalInfo, skills, education, experiences } = user;
  return (
    <div className="min-h-screen">
      <AboutHero profilePicture={personalInfo.picture} />
      <AboutSkills skills={skills} />
      <EducationSection education={education} />
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
}
