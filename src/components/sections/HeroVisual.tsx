import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/data/projects";
import { cn } from "@/lib/utils";

/** Three real project screenshots in browser frames. They fan out on hover. */
const frames = [
  {
    slug: "fitlog",
    className:
      "left-[4%] top-0 z-10 -rotate-6 group-hover/stack:-translate-x-3 group-hover/stack:-translate-y-2 group-hover/stack:-rotate-[8deg]",
  },
  {
    slug: "bazar-dor",
    className:
      "right-0 top-[9%] z-20 rotate-3 group-hover/stack:translate-x-3 group-hover/stack:-translate-y-1 group-hover/stack:rotate-[5deg]",
  },
  {
    slug: "surface-studio",
    className:
      "bottom-0 left-0 z-30 -rotate-1 group-hover/stack:translate-y-2 group-hover/stack:rotate-0",
  },
] as const;

export function HeroVisual() {
  return (
    <div className="group/stack relative mx-auto aspect-[5/4.4] w-full max-w-xl">
      {frames.map(({ slug, className }, i) => {
        const project = getProject(slug);
        if (!project) return null;
        return (
          <Link
            key={slug}
            href={`/projects/${slug}`}
            aria-label={`View the ${project.name} case study`}
            className={cn(
              "absolute w-[76%] overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/20 transition-transform duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none",
              className,
            )}
          >
            <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3 py-2">
              <span className="size-2 rounded-full bg-line" />
              <span className="size-2 rounded-full bg-line" />
              <span className="size-2 rounded-full bg-line" />
              <span className="ml-2 truncate text-[11px] text-muted">
                {project.liveUrl.replace("https://", "")}
              </span>
            </div>
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1363}
              height={704}
              sizes="(min-width: 1024px) 420px, 70vw"
              priority={i === 2}
              className="aspect-[16/9] w-full object-cover object-top"
            />
          </Link>
        );
      })}
    </div>
  );
}
