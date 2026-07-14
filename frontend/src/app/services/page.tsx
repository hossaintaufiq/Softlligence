import type { Metadata } from "next";
import { ServicesDetail } from "@/components/ServicesDetail";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, mobile apps, product design, integrations, cloud and AI — clear offerings with clear timelines.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesDetail />
    </main>
  );
}
