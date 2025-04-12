import ProjectsGrid from "@/components/projects/projects-grid";
import ProjectsHero from "@/components/projects/projects-hero";
import ProjectsFilter from "@/components/projects/projects-filter";
import { user } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development and design projects, from e-commerce platforms to interactive experiences",
};

export default async function ProjectsPage() {
  const { projects } = user;
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectsFilter />
      <ProjectsGrid projects={projects} />
    </div>
  );
}
