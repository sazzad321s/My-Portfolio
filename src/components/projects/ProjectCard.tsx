import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { TechChip } from "@/components/ui/TechChip";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type Props = { project: Project; featured?: boolean };

export function ProjectCard({ project, featured = false }: Props) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        featured && "lg:grid lg:grid-cols-[1.25fr_1fr]",
      )}
    >
      <div className="overflow-hidden border-b border-line bg-surface-2 lg:border-b-0">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1363}
          height={704}
          sizes={featured ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
          className={cn(
            "aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            featured && "lg:h-full",
          )}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-bold tracking-tight">
          {/* Stretched link: the whole card opens the case study. Buttons sit above it. */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 font-medium text-accent">{project.tagline}</p>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
          {project.stack.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </ul>

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-3 pt-7">
          <Button href={project.liveUrl} external size="sm">
            <ExternalLink className="size-4" aria-hidden /> Live Demo
          </Button>
          <Button href={project.githubUrl} external variant="secondary" size="sm">
            <FaGithub className="size-4" aria-hidden /> GitHub
          </Button>
          <Link
            href={`/projects/${project.slug}`}
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
          >
            Case study <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
