import ProjectsGrid from "@/components/projects/projects-grid";
import ProjectsHero from "@/components/projects/projects-hero";
import { user } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development and design projects, from e-commerce platforms to interactive experiences",
  openGraph: {
    title: "Projects | Amirali Motahari",
    description:
      "Explore my portfolio of web development and design projects, from e-commerce platforms to interactive experiences",
    url: new URL("/projects", process.env.NEXT_PUBLIC_URL),
    images: [
      {
        url: new URL(
          "/assets/images/og/projects-og.png",
          process.env.NEXT_PUBLIC_URL
        ),
        width: 400,
        height: 280,
        alt: "Projects by Amirali Motahari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Amirali Motahari",
    description:
      "Explore my portfolio of web development and design projects, from e-commerce platforms to interactive experiences",
    image: new URL(
      "/assets/images/og/projects-og.png",
      process.env.NEXT_PUBLIC_URL
    ),
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/projects`,
  },
};

export default async function ProjectsPage() {
  const { projects } = user;

  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
    </div>
  );
}
