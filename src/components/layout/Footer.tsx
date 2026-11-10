import Link from "next/link";
import { Mail } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navLinks, siteConfig } from "@/lib/site-config";

const socials = [
  { label: "GitHub", href: siteConfig.links.github, icon: FaGithub },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: FaLinkedinIn },
  { label: "Facebook", href: siteConfig.links.facebook, icon: FaFacebookF },
];

const iconLink =
  "grid size-10 place-items-center rounded-xl border border-line text-muted transition hover:border-accent hover:text-ink";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-bold tracking-tight">{siteConfig.name}</p>
          <p className="mt-2 max-w-xs text-muted">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold">Navigate</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link href={l.href} className="text-muted transition-colors hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold">Connect</p>
          <ul className="mt-3 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={iconLink}>
                  <Icon className="size-4" aria-hidden />
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email" className={iconLink}>
                <Mail className="size-4" aria-hidden />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-sm text-muted">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
