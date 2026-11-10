import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export type NavLink = { label: string; href: string; id: string };

export type TechItem = {
  label: string;
  icon: IconComponent;
  /** Honest level note shown next to the label, e.g. "fundamentals". */
  note?: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  items: TechItem[];
  /** Grid span classes so the bento layout stays balanced. */
  className?: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  overview: string[];
  features: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  githubUrl: string;
  /** Optional first-person reflection. The section only renders when this is filled in. */
  reflection?: string[];
};

export type Activity = { title: string; role: string; detail: string };
