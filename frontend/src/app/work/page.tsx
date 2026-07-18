import type { Metadata } from "next";
import { WorkDetail, type WorkFilter } from "@/components/WorkDetail";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { pageHeroImages } from "@/lib/homeVisuals";
import { workStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Web & app products, AI/ML builds, tools, and industry templates — real client work and customizable starters.",
};

const validFilters = new Set<WorkFilter>(["all", "web-app", "ai-ml", "tools", "templates"]);

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  const raw = params.filter ?? "all";
  const filter: WorkFilter = validFilters.has(raw as WorkFilter) ? (raw as WorkFilter) : "all";

  return (
    <main>
      <PageHero
        eyebrow="SELECTED WORK"
        title="Web & app, AI/ML, tools, and templates."
        description="Real client builds, intelligent workflows, internal utilities, and sector-ready starters — open live, hosted, or GitHub links when available."
        backgroundImage={pageHeroImages.work}
        meta={workStats.map((stat) => ({ value: stat.value, label: stat.label }))}
        actions={
          <>
            <Button href="/contact" size="lg" className="max-sm:w-full">
              Start a project
            </Button>
            <Button href="/services" variant="outline" size="lg" className="max-sm:w-full">
              View services
            </Button>
          </>
        }
      />
      <WorkDetail filter={filter} />
    </main>
  );
}
