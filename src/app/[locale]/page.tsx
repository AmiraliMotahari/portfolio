import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import LatestPosts from "@/components/home/latest-posts";
import Projects from "@/components/home/projects";
import { blogPosts } from "@/lib/data/blog-data";
import { getWebsiteSchema } from "@/lib/seo/schemas";
import { PersonalInfoType, ProjectsType, SocialsType } from "@/lib/types";
import { getTranslations } from "next-intl/server";
import Script from "next/script";
import { ProfilePage, WithContext } from "schema-dts";

const Home = async () => {
  const t = await getTranslations("home");
  const data = await getTranslations("data");

  const personalInfo = data.raw("personalInfo") as PersonalInfoType;
  const socials = data.raw("socials") as SocialsType;

  const topProjects = data.raw("projects").slice(0, 3) as ProjectsType;

  const recentPosts = blogPosts
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 3);

  const webUrl = process.env.NEXT_PUBLIC_URL ?? "";

  const jsonLd: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${webUrl}/#profile-page`,
    name: personalInfo.name,
    url: personalInfo.website,
    mainEntity: {
      "@type": "Person",
      "@id": `${webUrl}/#person`,
      name: personalInfo.name,
      url: personalInfo.website,
      description: personalInfo.summary,
      image: new URL(personalInfo.picture, webUrl).toString(),
      sameAs: socials.map((elem) => elem.href),
      jobTitle: "Frontend Developer",
      alternateName: ["themt", "amirali", "motahari"],
      knowsAbout: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Artificial Intelligence",
        "SEO",
        "Web Performance",
      ],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": webUrl,
      },
    },
  };

  return (
    <div className="min-h-svh">
      <Hero
        title={t("hero.title")}
        description={t("hero.description")}
        contactButton={t("hero.contactButton")}
      />
      <About personalInfo={personalInfo} />
      <Projects topProjects={topProjects} />
      <LatestPosts recentPosts={recentPosts} />
      <Contact
        contactData={{
          email: personalInfo.email,
          location: personalInfo.location,
        }}
        socials={socials}
      />
      <Script
        id="home-page-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="global-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebsiteSchema(webUrl ?? "")),
        }}
      />
    </div>
  );
};

export default Home;
