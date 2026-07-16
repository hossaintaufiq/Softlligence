"use client";

import { useMemo, useState } from "react";
import {
  clientProjects,
  aiMlProjects,
  toolsProjects,
  templateProjects,
  workStats,
  type projects,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/FinalCTA";
import { cn } from "@/lib/utils";

type WorkItem = (typeof projects)[number];
type WorkFilter = "all" | "shipped" | "ai-ml" | "tools" | "templates";

const filters: { id: WorkFilter; label: string; count: () => number }[] = [
  {
    id: "all",
    label: "All work",
    count: () =>
      clientProjects.length +
      aiMlProjects.length +
      toolsProjects.length +
      templateProjects.length,
  },
  { id: "shipped", label: "Shipped", count: () => clientProjects.length },
  { id: "ai-ml", label: "AI / ML", count: () => aiMlProjects.length },
  { id: "tools", label: "Tools", count: () => toolsProjects.length },
  { id: "templates", label: "Templates", count: () => templateProjects.length },
];

const workSections: {
  filter: WorkFilter;
  title: string;
  description: string;
  items: WorkItem[];
  gridClass: string;
}[] = [
  {
    filter: "shipped",
    title: "Shipped products",
    description: "Live work with real users — open links when available.",
    items: clientProjects,
    gridClass: "sm:grid-cols-2 lg:grid-cols-3",
  },
  {
    filter: "ai-ml",
    title: "AI & ML",
    description: "LLM integrations, automation, RAG, and intelligent workflows.",
    items: aiMlProjects,
    gridClass: "sm:grid-cols-2 lg:grid-cols-2",
  },
  {
    filter: "tools",
    title: "Tools & utilities",
    description: "Internal dashboards, dev utilities, and ops tools we build and use.",
    items: toolsProjects,
    gridClass: "sm:grid-cols-2 lg:grid-cols-2",
  },
  {
    filter: "templates",
    title: "Industry templates",
    description: "Sector-ready starters — we rebrand, extend, and ship for your business.",
    items: templateProjects,
    gridClass: "sm:grid-cols-2 lg:grid-cols-2",
  },
];

const kindMeta: Record<
  WorkItem["kind"],
  { label: string; badge: string; bar: string; card: string }
> = {
  shipped: {
    label: "Shipped",
    badge: "border-accent/35 bg-accent/12 text-accent",
    bar: "bg-linear-to-r from-accent/80 via-accent to-accent-2/60",
    card: "border-accent/25 hover:border-accent/45 hover:shadow-[0_20px_50px_rgba(0,0,0,0.28),0_0_32px_color-mix(in_srgb,var(--theme-accent)_12%,transparent)]",
  },
  "ai-ml": {
    label: "AI / ML",
    badge: "border-violet-400/35 bg-violet-500/12 text-violet-300",
    bar: "bg-linear-to-r from-violet-500/70 via-fuchsia-500/50 to-accent-2/40",
    card: "border-violet-400/20 hover:border-violet-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.22),0_0_28px_rgba(139,92,246,0.12)]",
  },
  tools: {
    label: "Tools",
    badge: "border-accent-2/35 bg-accent-2/12 text-accent-2",
    bar: "bg-linear-to-r from-accent-2/60 via-accent-2/35 to-transparent",
    card: "border-accent-2/20 hover:border-accent-2/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)]",
  },
  template: {
    label: "Template",
    badge: "border-white/20 bg-white/6 text-text-dim",
    bar: "bg-linear-to-r from-white/25 via-white/10 to-transparent",
    card: "border-white/10 hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)]",
  },
};

function ProjectLinks({ project }: { project: WorkItem }) {
  const links = [
    project.liveUrl && { href: project.liveUrl, label: "Live site", accent: true },
    project.ourHostedUrl && { href: project.ourHostedUrl, label: "Our hosted", accent: true },
    project.github && { href: project.github, label: "GitHub", accent: false },
  ].filter(Boolean) as { href: string; label: string; accent: boolean }[];

  if (links.length === 0) {
    return <span className="font-mono text-[11px] text-text-dim">Links coming soon</span>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-mono text-[11px] transition-all duration-200 hover:-translate-y-px",
            link.accent
              ? "border-accent/40 bg-accent/10 text-accent hover:bg-accent/20"
              : "border-white/12 bg-panel text-text-dim hover:border-accent-2/40 hover:text-text",
          )}
        >
          <span aria-hidden="true">{link.accent ? "↗" : "⌘"}</span>
          {link.label}
        </a>
      ))}
    </div>
  );
}

function WorkCard({ project, index }: { project: WorkItem; index: number }) {
  const meta = kindMeta[project.kind];

  return (
    <article
      id={project.id}
      className={cn(
        "group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[22px] border bg-ink/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1",
        meta.card,
      )}
    >
      <div className={cn("h-1 w-full", meta.bar)} aria-hidden="true" />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
          <div className="flex flex-wrap justify-end gap-2">
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wide uppercase",
                meta.badge,
              )}
            >
              {meta.label}
            </span>
            <span className="rounded-full border border-white/10 bg-panel/60 px-2.5 py-0.5 font-mono text-[10px] text-text-dim">
              {project.sector}
            </span>
          </div>
        </div>

        <h3 className="mb-1 font-display text-[clamp(18px,2.5vw,22px)] font-semibold leading-snug tracking-tight">
          {project.title}
        </h3>
        <p className="mb-3 text-[13px] font-medium text-accent-2">{project.headline}</p>
        <p className="mb-5 flex-1 text-[13.5px] leading-relaxed text-text-dim">{project.description}</p>

        <div className="mb-4 grid grid-cols-3 gap-2 border-t border-white/8 pt-4">
          {project.stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <strong className="block truncate font-display text-base font-semibold text-accent sm:text-lg">
                {stat.value}
              </strong>
              <span className="block text-[10px] leading-tight text-text-dim sm:text-[11px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-pill text-[10px]">
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="tech-pill text-[10px]">+{project.stack.length - 5}</span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/8 pt-4">
          <span className="font-mono text-[11px] text-text-dim">{project.timeline}</span>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export function WorkDetail() {
  const [filter, setFilter] = useState<WorkFilter>("all");

  const sectionsToShow = useMemo(() => {
    if (filter === "all") return workSections;
    return workSections.filter((section) => section.filter === filter);
  }, [filter]);

  let cardIndex = 0;

  return (
    <>
      <section className="border-b border-white/5 bg-ink">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-white/9 sm:grid-cols-4 sm:divide-y-0">
            {workStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60}>
                <div className="flex flex-col gap-1 px-3 py-6 sm:px-6 sm:py-8">
                  <span className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-[12px] text-text-dim sm:text-[13px]">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 md:py-16">
        <Container>
          <Reveal>
            <div className="mb-8 max-w-[680px]">
              <p className="font-mono text-[12px] tracking-[0.06em] text-text-dim">
                <span className="text-accent">⟨</span> PORTFOLIO <span className="text-accent">⟩</span>
              </p>
              <h2 className="mt-2 font-display text-[clamp(24px,3.5vw,36px)] font-semibold tracking-tight">
                Real builds, AI work, tools, and templates
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-text-dim">
                Filter by category — shipped client products, AI/ML builds, internal tools, or
                industry templates you can customize.
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="mb-10 flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 font-mono text-[12px] transition-all duration-200",
                    filter === item.id
                      ? "border-accent/50 bg-accent/15 text-accent shadow-[0_0_20px_color-mix(in_srgb,var(--theme-accent)_18%,transparent)]"
                      : "border-white/10 bg-panel/40 text-text-dim hover:border-white/20 hover:text-text",
                  )}
                >
                  {item.label}
                  <span className="ml-2 text-[10px] opacity-70">{item.count()}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {sectionsToShow.map((section) => {
            const startIndex = cardIndex;
            cardIndex += section.items.length;

            return (
              <div key={section.filter} className="mb-12 last:mb-0">
                {filter === "all" && (
                  <Reveal className="mb-5">
                    <h3 className="font-display text-lg font-semibold text-text">{section.title}</h3>
                    <p className="mt-1 text-[13px] text-text-dim">{section.description}</p>
                  </Reveal>
                )}
                <div className={cn("grid gap-5", section.gridClass)}>
                  {section.items.map((project, i) => (
                    <Reveal key={project.id} delay={i * 50}>
                      <WorkCard project={project} index={startIndex + i} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}

          <Reveal className="mt-10" delay={80}>
            <p className="text-center text-[13px] text-text-dim">
              Live, hosted, and GitHub links appear on each card when you add them. Private repos can be
              shared under NDA.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-panel py-14 md:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="mb-2 font-display text-[clamp(22px,3vw,32px)] font-semibold tracking-tight">
                  Need a shipped product, AI build, tool, or template?
                </h2>
                <p className="m-0 max-w-[480px] text-[14px] text-text-dim">
                  Tell us your sector and timeline. We&apos;ll show you relevant work and what a first
                  milestone could look like.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact" size="lg">
                  Start a project
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  View services
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
