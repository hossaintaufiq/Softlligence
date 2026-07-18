import Link from "next/link";
import {
  clientProjects,
  aiMlProjects,
  toolsProjects,
  templateProjects,
  type projects,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/FinalCTA";
import { cn } from "@/lib/utils";

type WorkItem = (typeof projects)[number];
export type WorkFilter = "all" | "web-app" | "ai-ml" | "tools" | "templates";

function isOngoing(project: WorkItem) {
  return Boolean(
    ("ongoing" in project && project.ongoing === true) || project.timeline === "Ongoing",
  );
}

function sortOngoingFirst(items: readonly WorkItem[]) {
  return [...items].sort((a, b) => Number(isOngoing(b)) - Number(isOngoing(a)));
}

const filters: { id: WorkFilter; label: string; count: number }[] = [
  {
    id: "all",
    label: "All work",
    count:
      clientProjects.length +
      aiMlProjects.length +
      toolsProjects.length +
      templateProjects.length,
  },
  { id: "web-app", label: "Web & App", count: clientProjects.length },
  { id: "ai-ml", label: "AI / ML", count: aiMlProjects.length },
  { id: "tools", label: "Tools", count: toolsProjects.length },
  { id: "templates", label: "Templates", count: templateProjects.length },
];

const kindMeta: Record<
  WorkItem["kind"],
  { label: string; badge: string; bar: string; card: string }
> = {
  "web-app": {
    label: "Web & App",
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

function getSections(filter: WorkFilter) {
  const sections = [
    {
      filter: "web-app" as const,
      title: "Web & App",
      description: "Client websites and applications — ongoing builds tagged clearly.",
      items: sortOngoingFirst(clientProjects),
      gridClass: "sm:grid-cols-2 lg:grid-cols-3",
    },
    {
      filter: "ai-ml" as const,
      title: "AI & ML",
      description: "LLM integrations, automation, RAG, and intelligent workflows.",
      items: sortOngoingFirst(aiMlProjects),
      gridClass: "sm:grid-cols-2 lg:grid-cols-2",
    },
    {
      filter: "tools" as const,
      title: "Tools & utilities",
      description: "Internal dashboards, routing, and ops tools we build and use.",
      items: sortOngoingFirst(toolsProjects),
      gridClass: "sm:grid-cols-2 lg:grid-cols-2",
    },
    {
      filter: "templates" as const,
      title: "Industry templates",
      description: "Sector-ready starters — we rebrand, extend, and ship for your business.",
      items: [...templateProjects],
      gridClass: "sm:grid-cols-2 lg:grid-cols-2",
    },
  ];

  if (filter === "all") return sections;
  return sections.filter((section) => section.filter === filter);
}

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
  const ongoing = isOngoing(project);

  return (
    <article
      id={project.id}
      className={cn(
        "group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[22px] border bg-ink/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1",
        ongoing
          ? "border-emerald-400/25 hover:border-emerald-400/45 hover:shadow-[0_20px_50px_rgba(0,0,0,0.22),0_0_28px_rgba(52,211,153,0.12)]"
          : meta.card,
      )}
    >
      <div
        className={cn(
          "h-1 w-full",
          ongoing
            ? "bg-linear-to-r from-emerald-500/70 via-accent/50 to-accent-2/40"
            : meta.bar,
        )}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
          <div className="flex flex-wrap justify-end gap-2">
            {ongoing ? (
              <span className="rounded-full border border-emerald-400/35 bg-emerald-500/12 px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-emerald-300 uppercase">
                Ongoing
              </span>
            ) : null}
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
              <strong className="block truncate font-display text-[13px] font-semibold text-accent sm:text-base md:text-lg">
                {stat.value}
              </strong>
              <span className="block text-[9px] leading-tight text-text-dim sm:text-[11px]">
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

        <div className="mt-auto flex flex-col gap-3 border-t border-white/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[11px] text-text-dim">{project.timeline}</span>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function filterHref(id: WorkFilter) {
  return id === "all" ? "/work" : `/work?filter=${id}`;
}

export function WorkDetail({ filter = "all" }: { filter?: WorkFilter }) {
  const activeFilter = filters.some((f) => f.id === filter) ? filter : "all";
  const sectionsToShow = getSections(activeFilter);
  let cardIndex = 0;

  return (
    <>
      <section className="bg-ink py-10 sm:py-12 md:py-16">
        <Container>
          <Reveal>
            <div className="mb-6 max-w-[680px] sm:mb-8">
              <p className="font-mono text-[11px] tracking-[0.06em] text-text-dim sm:text-[12px]">
                <span className="text-accent">⟨</span> PORTFOLIO <span className="text-accent">⟩</span>
              </p>
              <h2 className="mt-2 font-display text-[clamp(22px,5vw,36px)] font-semibold tracking-tight">
                Real builds, AI work, tools, and templates
              </h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-text-dim sm:text-[14px]">
                Filter by category — web &amp; app, AI/ML, tools, and templates. Ongoing projects stay
                in their category with an Ongoing tag.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:mb-10 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
              {filters.map((item) => {
                const isActive = activeFilter === item.id;
                return (
                  <Link
                    key={item.id}
                    href={filterHref(item.id)}
                    scroll={false}
                    className={cn(
                      "shrink-0 rounded-full border px-3.5 py-2 font-mono text-[11px] transition-all duration-200 sm:px-4 sm:text-[12px]",
                      isActive
                        ? "border-accent/50 bg-accent/15 text-accent shadow-[0_0_20px_color-mix(in_srgb,var(--theme-accent)_18%,transparent)]"
                        : "border-white/10 bg-panel/40 text-text-dim hover:border-white/20 hover:text-text",
                    )}
                  >
                    {item.label}
                    <span className="ml-2 text-[10px] opacity-70">{item.count}</span>
                  </Link>
                );
              })}
            </div>
          </Reveal>

          {sectionsToShow.map((section) => {
            const startIndex = cardIndex;
            cardIndex += section.items.length;

            return (
              <div key={section.filter} className="mb-12 last:mb-0">
                {activeFilter === "all" && (
                  <Reveal className="mb-5">
                    <h3 className="font-display text-lg font-semibold text-text">{section.title}</h3>
                    <p className="mt-1 text-[13px] text-text-dim">{section.description}</p>
                  </Reveal>
                )}
                <div className={cn("grid grid-cols-1 gap-4 sm:gap-5", section.gridClass)}>
                  {section.items.map((project, i) => (
                    <Reveal key={project.id}>
                      <WorkCard project={project} index={startIndex + i} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}

          <Reveal className="mt-10">
            <p className="text-center text-[13px] text-text-dim">
              Live, hosted, and GitHub links appear on each card when you add them. Private repos can be
              shared under NDA.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-panel py-12 sm:py-14 md:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-5 sm:gap-6 md:flex-row md:items-center">
              <div className="min-w-0">
                <h2 className="mb-2 font-display text-[clamp(20px,4.5vw,32px)] font-semibold tracking-tight">
                  Need a web app, AI build, tool, or template?
                </h2>
                <p className="m-0 max-w-[480px] text-[13.5px] text-text-dim sm:text-[14px]">
                  Tell us your sector and timeline. We&apos;ll show you relevant work and what a first
                  milestone could look like.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <Button href="/contact" size="lg" className="max-sm:w-full">
                  Start a project
                </Button>
                <Button href="/services" variant="outline" size="lg" className="max-sm:w-full">
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
