import { ContactForm } from "@/components/contact/ContactForm";
import { ContactLinks } from "@/components/contact/ContactLinks";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Let's work together"
      description="I'm looking for internship and junior developer opportunities, and I'm happy to talk about projects. Send a message or reach out on any channel below."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="min-w-0">
          <ContactLinks />
        </Reveal>
        <Reveal delay={0.1} className="min-w-0">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
