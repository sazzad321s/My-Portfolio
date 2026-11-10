import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TechChip } from "@/components/ui/TechChip";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technologies & skills"
      description="The tools I use to design, build and ship web applications, grouped by what they do."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={(i % 3) * 0.06} className={cn(cat.className)}>
            <article className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent">
              <h3 className="text-lg font-bold">{cat.title}</h3>
              <p className="mt-1 text-sm text-muted">{cat.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <TechChip key={item.label} {...item} />
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
