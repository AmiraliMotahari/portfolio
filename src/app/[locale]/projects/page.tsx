import ProjectsGrid from "@/components/projects/projects-grid";
import ProjectsHero from "@/components/projects/projects-hero";
import AdvancePagination from "@/components/advance-pagination";
import ProjectsGridSkeleton from "@/components/skeletons/projects/projects-grid-skeleton";
import { getProjects } from "@/lib/queries";

import { BreadcrumbItem, SortOptions } from "@/lib/types";
import Script from "next/script";
import { cache, Suspense } from "react";
import { CollectionPage, WithContext } from "schema-dts";
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld";

type Props = {
  searchParams: Promise<{ page?: string; perPage?: string; sort?: string }>;
};

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

const cachedGetProjects = cache(getProjects);

const ProjectsList = async ({ searchParams }: Props) => {
  const { page, perPage, sort } = await searchParams;
  const pageNum = parseInt(page ?? "", 10) || 1;
  const pageSize = parseInt(perPage ?? "", 10) || 9;

  const result = await cachedGetProjects({
    page: pageNum,
    perPage: pageSize,
    sort: sort as SortOptions,
  });

  const projects = result?.data ?? [];

  return <ProjectsGrid projects={projects} />;
};

export default async function ProjectsPage({ searchParams }: Props) {
  const { page, perPage, sort } = await searchParams;
  const pageNum = parseInt(page ?? "", 10) || 1;
  const pageSize = parseInt(perPage ?? "", 10) || 9;

  const result = await cachedGetProjects({
    page: pageNum,
    perPage: pageSize,
    sort: sort as SortOptions,
  });

  const projects = result?.data ?? [];
  const { totalPages } = result;

  const webUrl = process.env.NEXT_PUBLIC_URL ?? "";

  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${webUrl}/projects#collection-page`,
    name: "Projects",
    url: new URL("/projects", webUrl).toString(),
    description:
      "A collection of my work spanning web development, design, and interactive experiences. Each project represents a unique challenge and solution.",
    mainEntity: {
      "@type": "Person",
      "@id": `${webUrl}/#person`,
      name: "Amirali Motahari",
      url: `${webUrl}`,
    },
    hasPart: projects.map((project) => {
      return {
        "@type": "CreativeWork",
        "@id": `${webUrl}/projects/${project.slug}`,
        name: project.title,
        url: new URL("/projects", webUrl).toString(),
        image: new URL(project.image, webUrl).toString(),
        description: project.description,
        creator: {
          "@type": "Person",
          "@id": `${webUrl}/#person`,
          name: "Amirali Motahari",
        },
      };
    }),
  };

  const breadcrumb: BreadcrumbItem[] = [
    {
      name: "Home",
      url: webUrl,
    },
    {
      name: "Projects",
      url: new URL("/projects", webUrl).toString(),
    },
  ];

  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <Suspense
        key={pageNum + pageSize + (sort ?? "")}
        fallback={<ProjectsGridSkeleton />}
      >
        <ProjectsList searchParams={searchParams} />
      </Suspense>
      {totalPages > 1 ? (
        <AdvancePagination totalPages={totalPages} className="mb-8" />
      ) : null}
      <Script
        id="projects-page-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={breadcrumb} id="breadcrumb-schema-projects" />
    </div>
  );
}
