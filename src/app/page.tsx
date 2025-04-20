import About from "@/components/Home/about";
import Contact from "@/components/Home/contact";
import Hero from "@/components/Home/hero";
import LatestPosts from "@/components/Home/latest-posts";
import Projects from "@/components/Home/projects";
import { user } from "@/lib/data";
import { blogPosts } from "@/lib/data/blog-data";
import Script from "next/script";
import { Person, WithContext } from "schema-dts";

const Home = () => {
  const { personalInfo, projects, socials } = user;

  const topProjects = projects.slice(0, 3);
  const recentPosts = blogPosts
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  const webUrl = process.env.NEXT_PUBLIC_URL;

  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: personalInfo.website,
    image: new URL(personalInfo.picture, webUrl).toString(),
    sameAs: [...socials.flatMap((elem) => elem.href)],
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
  };

  return (
    <div className="min-h-screen">
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
    </div>
  );
};

export default Home;
