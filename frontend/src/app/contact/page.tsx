import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building — we'll reply within one business day.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="START A PROJECT"
        title="Tell us what you're building."
        description="Fill in the form and we'll come back with next steps within one business day — no obligation."
      />
      <Contact />
    </main>
  );
}
