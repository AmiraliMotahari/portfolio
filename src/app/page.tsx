import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About userImageUrl=""/>
      <div className="bg-red-400 w-full h-svh"></div>
    </>
  );
}
