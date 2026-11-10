import { Mail } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";
import { CopyEmailButton } from "./CopyEmailButton";

const rowClass =
  "flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition hover:border-accent";

const links = [
  { label: "LinkedIn", value: "Md Sazzad Hossain Minhaz", href: siteConfig.links.linkedin, icon: FaLinkedinIn },
  { label: "GitHub", value: "sazzad321s", href: siteConfig.links.github, icon: FaGithub },
  { label: "Facebook", value: "Sajjadul Hosen", href: siteConfig.links.facebook, icon: FaFacebookF },
];

export function ContactLinks() {
  return (
    <ul className="space-y-3">
      <li className={rowClass}>
        <span className="bg-brand grid size-11 shrink-0 place-items-center rounded-xl text-on-brand">
          <Mail className="size-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-muted">Email</p>
          <a href={`mailto:${siteConfig.email}`} className="block truncate font-semibold hover:text-accent">
            {siteConfig.email}
          </a>
        </div>
        <CopyEmailButton />
      </li>
      {links.map(({ label, value, href, icon: Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" className={rowClass}>
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent">
              <Icon className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm text-muted">{label}</span>
              <span className="block font-semibold">{value}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
