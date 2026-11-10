import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Section id="education" title="Education & activities">
        <Reveal className="grid gap-12 lg:grid-cols-2">
          <Education />
          <Activities />
        </Reveal>
      </Section>
      <Contact />
    </>
  );
}
