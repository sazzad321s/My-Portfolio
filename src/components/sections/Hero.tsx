import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { HeroVisual } from "./HeroVisual";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

const socialClass =
  "grid size-12 place-items-center rounded-xl border border-line bg-surface text-ink transition hover:-translate-y-0.5 hover:border-accent motion-reduce:hover:translate-y-0";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div aria-hidden className="hero-glow absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p
            className="hero-rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted"
            style={delay(0)}
          >
            <span className="bg-brand size-2 rounded-full" aria-hidden />
            CSE student at UITS, open to internships
          </p>

          <h1 id="hero-title" className="mt-6">
            <span
              className="hero-rise text-brand block pb-1 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              style={delay(100)}
            >
              {siteConfig.name}
            </span>
            <span
              className="hero-rise mt-4 block text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
              style={delay(200)}
            >
              {siteConfig.title}
            </span>
          </h1>

          <p
            className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={delay(300)}
          >
            I build responsive web applications from the interface to the database, using Next.js,
            Node.js and MongoDB. Based in {siteConfig.location}, currently learning TypeScript,
            backend design and AI engineering.
          </p>

          <div className="hero-rise mt-9 flex flex-wrap items-center gap-3" style={delay(400)}>
            <Button href="/#projects" size="lg">
              Explore My Projects <ArrowDown className="size-4" aria-hidden />
            </Button>
            <Button href="/#contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </div>

          <ul className="hero-rise mt-8 flex gap-3" style={delay(500)} aria-label="Social links">
            <li>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={socialClass}>
                <FaGithub className="size-5" aria-hidden />
              </a>
            </li>
            <li>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={socialClass}>
                <FaLinkedinIn className="size-5" aria-hidden />
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-rise" style={delay(250)}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
