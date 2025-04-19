import type { Metadata } from "next";
import AboutHero from "@/components/about/about-hero";
import AboutSkills from "@/components/about/about-skills";
import EducationSection from "@/components/about/education-section";
import ExperienceTimeline from "@/components/about/experience-timeline";
import { socials, user } from "@/lib/data";
import { AboutPage as AboutPageJsonLd, WithContext } from "schema-dts";
import Script from "next/script";

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
  const webUrl = process.env.NEXT_PUBLIC_URL;

  const jsonLd: WithContext<AboutPageJsonLd> = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About",
    url: new URL("/about", webUrl).toString(),
    mainEntity: {
      "@type": "Person",
      name: "Amirali Motahari",
      image: new URL(personalInfo.picture, webUrl).toString(),
      jobTitle: "Frontend Developer",
      description: personalInfo.summary,
      url: personalInfo.website,
      knowsAbout: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Artificial Intelligence",
        "SEO",
        "Web Performance",
      ],
      sameAs: socials.flatMap((elem) => elem.href),
    },
  };

  return (
    <div className="min-h-screen">
      <AboutHero
        profilePicture={personalInfo.picture}
        blurData={personalInfo.blurData}
      />
      <AboutSkills skills={skills} />
      <EducationSection education={education} />
      <ExperienceTimeline experiences={experiences} />
      <Script
        id="about-page-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
