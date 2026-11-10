import type { IconComponent } from "@/types";

type Props = { label: string; icon?: IconComponent; note?: string };

export function TechChip({ label, icon: Icon, note }: Props) {
  return (
    <li className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-accent">
      {Icon && <Icon className="size-4 shrink-0 text-accent" />}
      <span>{label}</span>
      {note && <span className="text-xs font-normal text-muted">{note}</span>}
    </li>
  );
}
