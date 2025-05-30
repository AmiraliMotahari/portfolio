import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld";
import GradientBackground from "@/components/ui/gradient-background";
import { BreadcrumbItem } from "@/lib/types";
import {
  CalendarDays,
  Coffee,
  Code,
  Headphones,
  BookOpen,
  Dumbbell,
} from "lucide-react";
import type { Metadata } from "next";
import Script from "next/script";
import { BlogPosting, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Now",
  description:
    "Discover what I'm currently working on, my latest projects, tools I use, and goals I'm pursuing as a creative developer.",
  openGraph: {
    title: "Now | Amirali Motahari",
    description:
      "Discover what I'm currently working on, my latest projects, tools I use, and goals I'm pursuing as a creative developer.",
    url: new URL("/now", process.env.NEXT_PUBLIC_URL),
    images: [
      {
        url: new URL(
          "/assets/images/amirali-motahari.jpeg",
          process.env.NEXT_PUBLIC_URL
        ),
        width: 400,
        height: 280,
        alt: "Amirali Motahari Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Now | Amirali Motahari",
    description:
      "Discover what I'm currently working on, my latest projects, tools I use, and goals I'm pursuing as a creative developer.",
    images: [
      new URL(
        "/assets/images/amirali-motahari.jpeg",
        process.env.NEXT_PUBLIC_URL
      ),
    ],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/now`,
  },
};

export default async function NowPage() {
  const webUrl = process.env.NEXT_PUBLIC_URL ?? "";
  const datePublished = new Date("2025-04-12").toISOString();
  const dateModified = new Date("2025-04-12").toISOString();

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${webUrl}/now#blog-post`,
    headline: "Now - What I'm Focused On",
    description:
      "Here's what I'm currently working on, learning, and thinking about.",
    datePublished: datePublished,
    dateModified: dateModified,
    url: new URL("/now", webUrl).toString(),
    image: new URL("/assets/images/amiralimotahari.jpeg", webUrl).toString(),
    author: {
      "@type": "Person",
      name: "Amirali Motahari",
      url: `${webUrl}/#person`,
    },
    publisher: {
      "@type": "Organization",
      name: "Amirali Motahari",
      logo: {
        "@type": "ImageObject",
        url: `${webUrl}/assets/images/logo-round.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": new URL("/now", webUrl).toString(),
    },
    articleBody:
      "I'm currently leading multiple projects, including an e-commerce store and a tax management system built with Next.js. I'm pursuing a Master's degree in Artificial Intelligence while sharpening my skills in web development and digital marketing. My days are driven by early morning coding sessions, sound tracked by synthwave playlists, and balanced with workouts and meditation. I'm passionate about blending AI with intuitive design to create smarter digital experiences.",
    keywords: [
      "Freelance",
      "Frontend Developer",
      "Web Development",
      "Next.js",
      "Now Page",
    ],
  };

  const breadcrumb: BreadcrumbItem[] = [
    {
      name: "Home",
      url: webUrl,
    },
    {
      name: "Now",
      url: new URL("/now", webUrl).toString(),
    },
  ];
  return (
    <div className="min-h-screen">
      <section className="mx-auto dynamic-px pt-32 pb-20 relative">
        <GradientBackground />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
            Now
          </h1>

          <div className="glass-card p-8 mb-12">
            <div className="border-l-4 border-neon-green pl-4 italic mb-8">
              Last updated:
              {new Date(dateModified).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Code className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    Current Projects
                  </h2>
                  <p>
                    Managing multiple initiatives, including an e-commerce store
                    and a tax management system using Next.js.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Learning</h2>
                  <p>
                    Currently pursuing a Master&apos;s degree in Artificial
                    Intelligence. Actively developing skills in Next.js and
                    expanding knowledge in digital marketing strategies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Headphones className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Listening To</h2>
                  <p>
                    Synthwave playlists while coding. Tech podcasts during
                    commutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Dumbbell className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    Health & Fitness
                  </h2>
                  <p>
                    Maintaining a 3-day workout routine. Experimenting with
                    meditation for better focus and creativity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Coffee className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Daily Routine</h2>
                  <p>
                    Early riser. Morning coding sessions are my most productive.
                    Taking regular breaks to stay fresh and creative.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CalendarDays className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Future Plans</h2>
                  <p>
                    Working toward completing my Master’s degree in Artificial
                    Intelligence. I aim to combine my expertise in web
                    development with AI to build smarter, more intuitive digital
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script
        id="now-page-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={breadcrumb} id="breadcrumb-schema-now" />
    </div>
  );
}
