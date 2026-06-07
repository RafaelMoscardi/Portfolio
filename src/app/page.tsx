import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import TechMarquee from "@/components/ui/TechMarquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
