import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { companyContact } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Softlligence what you’re building — send a project brief, email softlligence@gmail.com, or call +8801728360834.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="START A PROJECT"
        title="Tell us what you're building."
        description="Share a short project brief, or contact Softlligence by email. We reply within one business day."
        meta={[
          { value: "<24h", label: "Typical reply" },
          { value: "Email", label: companyContact.email },
          { value: "Phone", label: companyContact.phoneDisplay },
        ]}
        actions={
          <>
            <Button href="#contact" size="lg" className="max-sm:w-full">
              Send a project brief
            </Button>
            <Button href={companyContact.mailto} variant="outline" size="lg" className="max-sm:w-full">
              Email Softlligence
            </Button>
          </>
        }
      />
      <Contact />
    </main>
  );
}
