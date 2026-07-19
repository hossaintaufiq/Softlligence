import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { companyContact } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email softlligence@gmail.com or call +8801728360834 — Softlligence replies within one business day.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="START A PROJECT"
        title="Tell us what you're building."
        description="Reach Softlligence by email or phone. No form — just a direct line to the team. We reply within one business day."
        meta={[
          { value: "Email", label: companyContact.email },
          { value: "Phone", label: companyContact.phoneDisplay },
        ]}
        actions={
          <>
            <Button
              href={`${companyContact.mailto}?subject=${encodeURIComponent("Project inquiry")}`}
              size="lg"
              className="max-sm:w-full"
            >
              Email Softlligence
            </Button>
            <Button href={companyContact.tel} variant="outline" size="lg" className="max-sm:w-full">
              Call us
            </Button>
          </>
        }
      />
      <Contact />
    </main>
  );
}
