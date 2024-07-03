
import { ContactMe } from "@/components/contactMe";
import Education from "@/components/education";
import Experiences from "@/components/experiences";
import Hero from "@/components/Hero/Hero";
import Languages from "@/components/languages/Languages";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects/>
      <Education/>
      <Languages />
      <Experiences/>
      <ContactMe />
    </>
  );
}
