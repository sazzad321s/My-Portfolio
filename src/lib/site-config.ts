import type { NavLink } from "@/types";

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteConfig = {
  name: "Md Sazzad Hossain Minhaz",
  shortName: "Minhaz",
  initials: "SM",
  title: "Full-Stack Developer",
  location: "Bangladesh",
  tagline: "Building practical web applications, from interface to database.",
  description:
    "Md Sazzad Hossain Minhaz is a Computer Science and Engineering student and Full-Stack Developer from Bangladesh, building responsive web apps with Next.js, Node.js and MongoDB.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  email: "sazzadulhossain1290@gmail.com",
  links: {
    github: "https://github.com/sazzad321s",
    linkedin: "https://www.linkedin.com/in/md-sazzad-hossain-minhaz-5bb14843b",
    facebook: "https://www.facebook.com/sajjadul.hosen.11",
  },
  /** Photo shown in the About section. Replace the file in /public/images to change it. */
  profileImage: "/images/profile.webp",
  /**
   * Resume: drop your PDF at public/resume/Sazzad-Hossain-Minhaz-CV.pdf
   * and set `available` to true. Until then the button shows a "soon" state.
   */
  resume: {
    url: "/resume/Sazzad-Hossain-Minhaz-CV.pdf",
    available: false,
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Education", href: "/#education", id: "education" },
  { label: "Contact", href: "/#contact", id: "contact" },
];
