import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";

export function Education() {
  return (
    <div>
      <h3 className="text-2xl font-bold tracking-tight">Education</h3>
      <div className="relative mt-6 border-l-2 border-line pl-8">
        <span
          aria-hidden
          className="bg-brand absolute -left-[13px] top-1 grid size-6 place-items-center rounded-full text-on-brand"
        >
          <GraduationCap className="size-3.5" />
        </span>
        <div className="rounded-2xl border border-line bg-surface p-6">
          <p className="text-sm font-medium text-accent">{education.period}</p>
          <h4 className="mt-2 text-xl font-bold">{education.institution}</h4>
          <p className="mt-1 font-medium">{education.degree}</p>
          <p className="mt-3 text-muted">{education.note}</p>
        </div>
      </div>
    </div>
  );
}
