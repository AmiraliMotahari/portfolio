import About from "@/components/Home/About";
import Contact from "@/components/Home/contact";
import Hero from "@/components/Home/Hero";
import LatestPosts from "@/components/Home/latest-posts";
import Projects from "@/components/Home/projects";
import { user } from "@/lib/data";

const Home = () => {
  const {
    personalInfo: { picture },
    skills,
    projects: topProjects,
  } = user;
  return (
    <>
      <Hero />
      <About userImageUrl={picture} skills={skills} />
      <Projects topProjects={topProjects} />
      <LatestPosts />
      <Contact />
    </>
  );
};

export default Home;
