import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Experience from "@/components/home/Experience";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
      <Services />
      <FeaturedProjects />
      <Experience />
      <CTA />
    </div>
  );
}
