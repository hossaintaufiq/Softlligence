import type { Metadata } from "next";
import { IndustriesDetail } from "@/components/IndustriesDetail";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Custom software for government, education, finance, healthcare, retail and nonprofits — built with sector-specific security, uptime and user experience.",
};

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesDetail />
    </main>
  );
}
