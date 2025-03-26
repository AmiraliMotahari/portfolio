import About from "@/components/Home/About";
import Contact from "@/components/Home/contact";
import Hero from "@/components/Home/Hero";
import LatestPosts from "@/components/Home/latest-posts";
import Projects from "@/components/Home/projects";
import { user } from "@/lib/data";
import { blogPosts } from "@/lib/data/blog-data";

const Home = () => {
  const { personalInfo, skills, projects, socials } = user;

  const topProjects = projects.slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />
      <About userImageUrl={personalInfo.picture} skills={skills} />
      <Projects topProjects={topProjects} />
      <LatestPosts recentPosts={recentPosts} />
      <Contact
        contactData={{
          email: personalInfo.email,
          location: personalInfo.location,
        }}
        socials={socials}
      />
    </>
  );
};

export default Home;
