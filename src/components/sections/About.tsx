import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/education";
import { siteConfig } from "@/lib/site-config";

const facts = [
  { term: "Studying", detail: `Computer Science & Engineering, UITS` },
  { term: "Based in", detail: siteConfig.location },
  { term: "Focus", detail: "Full-stack web applications" },
  { term: "Exploring", detail: "AI engineering" },
];

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid items-start gap-12 lg:grid-cols-[320px_1fr]">
        <Reveal>
          {/* Replace /public/images/profile.webp to change the photo. */}
          <div className="bg-brand mx-auto w-full max-w-xs rounded-3xl p-1">
            <Image
              src={siteConfig.profileImage}
              alt={`Portrait of ${siteConfig.name}`}
              width={400}
              height={400}
              sizes="320px"
              className="aspect-square w-full rounded-[1.35rem] object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m a Computer Science and Engineering student at the {education.institution} in
              Bangladesh, where I began my degree in July 2025.
            </p>
            <p>
              I got into software development because I like turning an idea into something people
              can actually use. I started with HTML, CSS and JavaScript, moved on to React and
              Next.js for interfaces, then picked up Node.js, Express and databases like MongoDB and
              MySQL so I could build the whole application, including sign-in with email, Google and
              JWT.
            </p>
            <p>
              My projects so far are a studio booking platform, a grocery price tracker for
              Bangladeshi markets and a workout planner. Each one is built around a practical,
              everyday need. I also practise problem solving in programming contests, including the
              ICPC Preliminary Contest 2025.
            </p>
            <p>
              Next, I want to go deeper into TypeScript, backend design and AI engineering, and build
              software that uses intelligence in genuinely useful ways. I&apos;m looking for an
              internship where I can learn from a team and contribute to real products.
            </p>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.term} className="rounded-xl border border-line bg-surface p-4">
                <dt className="text-sm text-muted">{f.term}</dt>
                <dd className="mt-1 font-semibold">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
