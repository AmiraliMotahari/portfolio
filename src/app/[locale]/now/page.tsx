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
import { getFormatter, getTranslations } from "next-intl/server";
import Script from "next/script";
import { BlogPosting, WithContext } from "schema-dts";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("now");
  const baseUrl = process.env.NEXT_PUBLIC_URL ?? "";
  const nowPageUrl = new URL("/now", baseUrl);

  return {
    title: t("seo.title"),
    description: t("seo.description"),
    openGraph: {
      title: t("seo.openGraph.title"),
      description: t("seo.openGraph.description"),
      url: nowPageUrl,
      images: [
        {
          url: new URL("/assets/images/amirali-motahari.jpeg", baseUrl),
          width: 400,
          height: 280,
          alt: t("seo.openGraph.images.alt"),
        },
      ],
      locale: t("seo.openGraph.locale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("seo.twitter.title"),
      description: t("seo.twitter.description"),
      images: [new URL("/assets/images/amirali-motahari.jpeg", baseUrl)],
    },
    alternates: {
      canonical: nowPageUrl,
    },
  };
};

export default async function NowPage() {
  const t = await getTranslations("now");
  const format = await getFormatter();
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
    <div className="min-h-svh">
      <section className="mx-auto dynamic-px pt-32 pb-20 relative">
        <GradientBackground />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("sections.mainTitle")}
          </h1>

          <div className="glass-card p-8 mb-12">
            <div className="ltr:border-l-4 rtl:border-r-4 border-foreground ltr:pl-4 rtl:pr-4 italic mb-8">
              {t("sections.lastUpdated")}{" "}
              {format.dateTime(new Date(dateModified), {
                dateStyle: "medium",
              })}
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Code className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t("sections.currentProjects.title")}
                  </h2>
                  <p>{t("sections.currentProjects.body")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t("sections.learning.title")}
                  </h2>
                  <p>{t("sections.learning.body")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Headphones className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t("sections.listening.title")}
                  </h2>
                  <p>{t("sections.listening.body")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Dumbbell className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t("sections.health.title")}
                  </h2>
                  <p>{t("sections.health.body")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Coffee className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t("sections.dailyRoutine.title")}
                  </h2>
                  <p>{t("sections.dailyRoutine.body")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CalendarDays className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t("sections.futurePlans.title")}
                  </h2>
                  <p>{t("sections.futurePlans.body")}</p>
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
