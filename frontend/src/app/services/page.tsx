import type { Metadata } from "next";
import { ServicesPage } from "@/components/services-page/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Enterprise software, digital products, mobile, AI, cloud & DevOps, and long-term support — Softlligence builds systems for scale.",
};

export default function ServicesRoutePage() {
  return (
    <main>
      <ServicesPage />
    </main>
  );
}
