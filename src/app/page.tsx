import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import LatestPosts from "@/components/home/latest-posts";
import Projects from "@/components/home/projects";
import { user } from "@/lib/data";
import { blogPosts } from "@/lib/data/blog-data";
import { getWebsiteSchema } from "@/lib/seo/schemas";
import Script from "next/script";
import { ProfilePage, WithContext } from "schema-dts";

const Home = () => {
  const { personalInfo, projects, socials } = user;

  const topProjects = projects.slice(0, 3);
  const recentPosts = blogPosts
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  const webUrl = process.env.NEXT_PUBLIC_URL ?? "";

  const jsonLd: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": `${webUrl}/#person`,
      name: personalInfo.name,
      url: personalInfo.website,
      description: personalInfo.summary,
      image: new URL(personalInfo.picture, webUrl).toString(),
      sameAs: socials.map((elem) => elem.href),
      jobTitle: "Frontend Developer",
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
      alternateName: ["amirali", "motahari", "themt"],
    },
  };

  return (
    <div className="min-h-svh">
      <Hero />
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
