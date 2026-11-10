import { Trophy } from "lucide-react";
import { activities } from "@/data/education";

export function Activities() {
  return (
    <div>
      <h3 className="text-2xl font-bold tracking-tight">Achievements & activities</h3>
      <ul className="mt-6 space-y-4">
        {activities.map((a) => (
          <li key={a.title} className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent">
              <Trophy className="size-5" aria-hidden />
            </span>
            <div>
              <h4 className="font-bold">{a.title}</h4>
              <p className="text-sm font-medium text-accent">{a.role}</p>
              <p className="mt-2 text-muted">{a.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
