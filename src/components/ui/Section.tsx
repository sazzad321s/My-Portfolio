import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, title, description, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-3 text-lg leading-relaxed text-muted">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
