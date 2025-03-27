import AboutHero from "@/components/about/about-hero";
import AboutSkills from "@/components/about/about-skills";
import EducationSection from "@/components/about/education-section";
import ExperienceTimeline from "@/components/about/experience-timeline";
import Testimonials from "@/components/about/testimonials";
import { user } from "@/lib/data";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about my background, skills, and experience as a creative developer.",
};

export default function AboutPage() {
  const { personalInfo, skills, education, experiences } = user;
  return (
    <div className="min-h-screen">
      <AboutHero profilePicture={personalInfo.picture} />
      <AboutSkills skills={skills} />
      <EducationSection education={education} />
      <ExperienceTimeline experiences={experiences} />
      <Testimonials />
    </div>
  );
}
