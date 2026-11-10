import { siteConfig } from "./site-config";

export type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/** Builds a pre-filled mailto: link so the form works without any backend. */
export function buildMailto({ name, email, subject, message }: ContactFields) {
  const body = `${message}\n\nFrom: ${name} (${email})`;
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
