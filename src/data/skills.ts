import {
  Braces,
  KeyRound,
  Mail,
  Plug,
  RefreshCw,
  ShieldCheck,
  Webhook,
} from "lucide-react";
import { FaGithub, FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiCplusplus,
  SiCss,
  SiExpress,
  SiGit,
  SiGoogle,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPhpmyadmin,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiXampp,
} from "react-icons/si";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Interfaces that are responsive, accessible and easy to use.",
    className: "md:col-span-2",
    items: [
      { label: "HTML5", icon: SiHtml5 },
      { label: "CSS3", icon: SiCss },
      { label: "JavaScript", icon: SiJavascript },
      { label: "TypeScript", icon: SiTypescript, note: "fundamentals" },
      { label: "React.js", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend Development",
    description: "Server logic, APIs and data flow.",
    items: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Express.js", icon: SiExpress },
      { label: "REST APIs", icon: Webhook },
      { label: "API Integration", icon: Plug },
      { label: "Authentication", icon: KeyRound },
      { label: "Async JavaScript", icon: RefreshCw, note: "Promises, async/await, fetch" },
    ],
  },
  {
    title: "Programming Languages",
    description: "What I use for projects and problem solving.",
    items: [
      { label: "JavaScript", icon: SiJavascript },
      { label: "TypeScript", icon: SiTypescript, note: "fundamentals" },
      { label: "Java", icon: FaJava },
      { label: "C++", icon: SiCplusplus },
      { label: "Python", icon: SiPython, note: "basic" },
    ],
  },
  {
    title: "Database",
    description: "Storing and querying application data.",
    items: [
      { label: "MongoDB", icon: SiMongodb },
      { label: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Authentication & Security",
    description: "Sign-in flows and session handling.",
    items: [
      { label: "Better Auth", icon: ShieldCheck },
      { label: "JWT", icon: Braces },
      { label: "Email Authentication", icon: Mail },
      { label: "Google Authentication", icon: SiGoogle },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "My everyday workflow and deployment setup.",
    className: "md:col-span-2 lg:col-span-3",
    items: [
      { label: "Git", icon: SiGit },
      { label: "GitHub", icon: FaGithub },
      { label: "VS Code", icon: VscVscode },
      { label: "Vercel", icon: SiVercel },
      { label: "Netlify", icon: SiNetlify },
      { label: "XAMPP", icon: SiXampp },
      { label: "phpMyAdmin", icon: SiPhpmyadmin },
    ],
  },
];

