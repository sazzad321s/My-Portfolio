import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Featured projects"
      description="Real applications with live demos and public code. Open any card for the details."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.08} className={i === 0 ? "lg:col-span-2" : undefined}>
            <ProjectCard project={project} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
