import type { Metadata } from "next";
import { ContactPageView } from "@/components/contact-page/ContactPageView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Softlligence what you’re building — send a project brief, email softlligence@gmail.com, or call +8801728360834.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageView />
    </main>
  );
}
