"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { buildMailto } from "@/lib/mailto";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    // Without an email service key, fall back to opening the visitor's email app.
    if (!accessKey) {
      window.location.href = buildMailto(fields);
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, ...fields }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="subject" className="text-sm font-semibold">Subject</label>
        <input id="subject" name="subject" type="text" required placeholder="Internship opportunity, project idea…" className={fieldClass} />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold">Message</label>
        <textarea id="message" name="message" required rows={5} placeholder="How can I help?" className={`${fieldClass} resize-y`} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          <Send className="size-4" aria-hidden />
          {status === "sending" ? "Sending…" : accessKey ? "Send message" : "Open in email app"}
        </Button>
        <p role="status" aria-live="polite" className="text-sm text-muted">
          {status === "idle" &&
            (accessKey
              ? "Your message is delivered straight to my inbox."
              : "This opens your email app with the message filled in.")}
          {status === "sent" && "Thanks, your message was sent. I'll reply by email."}
          {status === "mailto" && `If your email app didn't open, write to ${siteConfig.email}.`}
          {status === "error" && `Sending failed. Please email ${siteConfig.email} directly.`}
        </p>
      </div>
    </form>
  );
}
