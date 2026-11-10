import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { TechChip } from "@/components/ui/TechChip";
import { getProject, projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} case study`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.name, description: project.description, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-8 lg:pt-36">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink">
        <ArrowLeft className="size-4" aria-hidden /> All projects
      </Link>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">{project.name}</h1>
      <p className="mt-3 text-xl text-muted">{project.tagline}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={project.liveUrl} external>
          <ExternalLink className="size-4" aria-hidden /> Live Demo
        </Button>
        <Button href={project.githubUrl} external variant="secondary">
          <FaGithub className="size-4" aria-hidden /> GitHub Repository
        </Button>
      </div>

      <Image
        src={project.image}
        alt={project.imageAlt}
        width={1363}
        height={704}
        priority
        sizes="(min-width: 896px) 832px, 100vw"
        className="mt-10 w-full rounded-2xl border border-line shadow-xl shadow-black/10"
      />

      <div className="mt-14 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-12">
          <section aria-labelledby="overview">
            <h2 id="overview" className="text-2xl font-bold">Overview</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              {project.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="features">
            <h2 id="features" className="text-2xl font-bold">Key features</h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-muted">
                  <span aria-hidden className="bg-brand mt-2.5 size-1.5 shrink-0 rounded-full" />
                  <span className="text-lg leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          {project.reflection && (
            <section aria-labelledby="reflection">
              <h2 id="reflection" className="text-2xl font-bold">What I learned</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
                {project.reflection.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside aria-labelledby="stack" className="h-fit rounded-2xl border border-line bg-surface p-6">
          <h2 id="stack" className="text-lg font-bold">Tech stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <TechChip key={t} label={t} />
            ))}
          </ul>
        </aside>
      </div>

      <nav aria-label="Next project" className="mt-20 border-t border-line pt-8">
        <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-4">
          <span>
            <span className="block text-sm text-muted">Next project</span>
            <span className="text-2xl font-bold">{next.name}</span>
          </span>
          <ArrowRight className="size-6 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden />
        </Link>
      </nav>
    </article>
  );
}
