import type { Project } from "@/types";

/**
 * Only facts verified from the live sites and READMEs are used here.
 * To add a project: add an object, drop a screenshot in /public/images.
 * To add your own write-up, fill in `reflection` and it appears on the case-study page.
 */
export const projects: Project[] = [
  {
    slug: "surface-studio",
    name: "Surface Studio",
    tagline: "A peer-to-peer marketplace for booking creative production spaces.",
    description:
      "Find and book photo cycloramas, sound stages, podcast lounges and recording suites, or list your own studio as a host.",
    overview: [
      "Surface Studio connects creators with the people who run production spaces. Visitors browse studios by category, while hosts register to list their own space.",
      "The interface is built around the booking journey: a featured-studio hero, an Explore page for browsing, a short how-it-works flow, and separate sign-up paths for creators and hosts.",
    ],
    features: [
      "Hero carousel of featured studios",
      "Explore Studios page for browsing spaces",
      "Four space categories: photo cycloramas, sound stages, podcast lounges, music recording suites",
      "Login and registration, with a dedicated host sign-up path",
      "Light and dark theme toggle",
      "Responsive layout",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    image: "/images/surface-studio.webp",
    imageAlt: "Surface Studio home page with a hero carousel showing a photography studio",
    liveUrl: "https://surface-studio-drab.vercel.app",
    githubUrl: "https://github.com/sazzad321s/Surface-Studio",
  },
  {
    slug: "bazar-dor",
    name: "Bazar-Dor (বাজার দর)",
    tagline: "A mobile-first grocery price tracker with Bangla branding.",
    description:
      "Check daily prices of everyday groceries in Bangladeshi markets, with price changes compared to previous days.",
    overview: [
      "Bazar-Dor helps people see what everyday groceries cost. Prices are grouped into familiar categories and shown in Bangla, with clear markers for what went up or down.",
      "Each product has its own page that compares today's price with yesterday's and last week's, and shows average, highest and lowest prices.",
    ],
    features: [
      "Mobile-first, responsive design with a Bangla interface",
      "Eight categories: rice, lentils, oil, vegetables, fish, meat, eggs and dairy, spices",
      "Sections for products whose price rose or fell today",
      "Product pages with today, yesterday and last-week prices plus average, highest and lowest",
      "Sign-in and sign-up with Better Auth",
      "MongoDB database integration",
    ],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
      "React Hot Toast",
      "Lucide React",
    ],
    image: "/images/bazar-dor.webp",
    imageAlt: "Bazar-Dor home page in Bangla showing category tabs and a price ticker",
    liveUrl: "https://bazar-dor-three-sigma.vercel.app",
    githubUrl: "https://github.com/sazzad321s/bazar-dor",
  },
  {
    slug: "fitlog",
    name: "FitLog",
    tagline: "A workout library for browsing lifts and building a plan.",
    description:
      "Browse twelve exercises by muscle group, see equipment, duration and estimated calories, and keep a personal plan.",
    overview: [
      "FitLog is a workout library covering the major muscle groups. Every exercise card shows target muscles, required equipment, duration, estimated calories and a rating.",
      "The header keeps running counts for your plan and saved workouts, and a My Plan page collects what you chose.",
    ],
    features: [
      "Library of twelve exercises across chest, back, legs, shoulders, arms, core and full body",
      "Equipment, duration, calorie estimate and rating on each card",
      "Workout detail pages",
      "My Plan page with Plan and Saved counters",
      "Responsive layout",
    ],
    stack: ["Next.js", "React"],
    image: "/images/fitlog.webp",
    imageAlt: "FitLog workout library page with illustrated exercise cards",
    liveUrl: "https://fit-log-one-rho.vercel.app",
    githubUrl: "https://github.com/sazzad321s/Fit-Log",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
