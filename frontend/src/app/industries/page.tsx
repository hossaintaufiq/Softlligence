import type { Metadata } from "next";
import { IndustriesDetail } from "@/components/IndustriesDetail";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";
import { industries } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Custom software for government, education, finance, healthcare, retail and nonprofits — built with sector-specific security, uptime and user experience.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="WHO WE BUILD FOR"
        title="Different organizations, the same standard of build."
        description="Sector-specific experience without cutting corners on security, accessibility or uptime — so your users trust the product from day one."
      />

      {/* Quick jump nav */}
      <nav
        className="sticky top-[72px] z-50 border-b border-white/5 bg-ink/90 backdrop-blur-xl"
        aria-label="Industry sectors"
      >
        <Container className="flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={`#${industry.id}`}
              className="shrink-0 rounded-full border border-white/9 px-3.5 py-1.5 font-mono text-[11px] text-text-dim transition-all hover:border-accent/40 hover:bg-panel hover:text-text sm:px-4 sm:text-xs"
            >
              {industry.tag}
            </Link>
          ))}
        </Container>
      </nav>

      <IndustriesDetail />
    </main>
  );
}
