import type { Metadata } from "next";
import { WorkDetail, type WorkFilter } from "@/components/WorkDetail";

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
      <WorkDetail filter={filter} />
    </main>
  );
}
