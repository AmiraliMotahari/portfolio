import ProjectsGrid from "@/components/projects/projects-grid";
import ProjectsHero from "@/components/projects/projects-hero";
import { user } from "@/lib/data";
import Script from "next/script";
import { CollectionPage, WithContext } from "schema-dts";

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
  const webUrl = process.env.NEXT_PUBLIC_URL;

  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: new URL("/projects", webUrl).toString(),
    description:
      "A collection of my work spanning web development, design, and interactive experiences. Each project represents a unique challenge and solution.",
    hasPart: projects.slice(0, 10).map((elem) => {
      return {
        "@type": "CreativeWork",
        name: elem.title,
        url: new URL("/projects", webUrl).toString(),
        image: new URL(elem.image, webUrl).toString(),
        description: elem.description,
        creator: {
          "@type": "Person",
          name: "Amirali Motahari",
        },
      };
    }),
  };

  return (
    <div className="min-h-screen">
      <Script
        id="projects-page-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
    </div>
  );
}
