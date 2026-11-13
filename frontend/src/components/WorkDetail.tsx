import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HomeFinalCta } from "@/components/home-page/HomeFinalCta";
import { aiMlProjects, clientProjects, templateProjects, toolsProjects } from "@/lib/content";
import {
  filterHref,
  isOngoing,
  kindLabel,
  sortOngoingFirst,
  type WorkFilter,
  type WorkItem,
} from "@/components/work-page/workShared";
import { cn } from "@/lib/utils";
import "@/components/products-page/products.css";
import "@/components/pages/pages.css";
import { SectionBg3D } from "@/components/home-page/SectionBg3D";

export type { WorkFilter };

const filters: { id: WorkFilter; label: string; count: number }[] = [
  {
    id: "all",
    label: "All work",
    count: clientProjects.length + aiMlProjects.length + toolsProjects.length + templateProjects.length,
  },
  { id: "web-app", label: "Web & App", count: clientProjects.length },
  { id: "ai-ml", label: "AI / ML", count: aiMlProjects.length },
  { id: "tools", label: "Tools", count: toolsProjects.length },
  { id: "templates", label: "Templates", count: templateProjects.length },
];

function getSections(filter: WorkFilter) {
  const sections = [
    {
      filter: "web-app" as const,
      title: "Web & App",
      description: "Client websites and applications. Ongoing builds are tagged.",
      items: sortOngoingFirst(clientProjects),
    },
    {
      filter: "ai-ml" as const,
      title: "AI & ML",
      description: "LLM integrations, automation, RAG and intelligent workflows.",
      items: sortOngoingFirst(aiMlProjects),
    },
    {
      filter: "tools" as const,
      title: "Tools & utilities",
      description: "Internal dashboards, routing and ops tools we build and use.",
      items: sortOngoingFirst(toolsProjects),
    },
    {
      filter: "templates" as const,
      title: "Industry templates",
      description: "Sector-ready starters we rebrand, extend and ship for your business.",
      items: [...templateProjects],
    },
  ];
  return filter === "all" ? sections : sections.filter((s) => s.filter === filter);
}

function text(project: WorkItem, key: "challenge" | "solution") {
  const v = (project as Record<string, unknown>)[key];
  return typeof v === "string" ? v : null;
}

function Links({ project }: { project: WorkItem }) {
  const links = [
    project.liveUrl && { href: project.liveUrl, label: "Live site" },
    project.ourHostedUrl && { href: project.ourHostedUrl, label: "Hosted demo" },
    project.github && { href: project.github, label: "GitHub" },
  ].filter(Boolean) as { href: string; label: string }[];
  if (!links.length) return null;
  return (
    <ul className="wk-links">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
            {l.label}
            <ArrowUpRight size={15} aria-hidden="true" />
            <span className="sr-only"> for {project.title} (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function WorkDetail({ filter = "all" }: { filter?: WorkFilter }) {
  const active = filters.some((f) => f.id === filter) ? filter : "all";
  const sections = getSections(active);

  return (
    <div className="pdp">
      <ScrollReveal />

      <section className="pdp-hero" aria-labelledby="work-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <SectionBg3D variant="contour" />
        <div className="wrap">
          <h1 id="work-title" className="pdp-title enter">
            Engineering products used by real organizations.
          </h1>
          <p className="pdp-lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
            Web and app products, AI and ML builds, internal tools, and industry templates.
          </p>
        </div>
      </section>

      <section className="sec wk" id="portfolio" aria-label="Portfolio">
        <div className="wrap">
          <nav className="wk-filters" aria-label="Filter portfolio by category">
            {filters.map((f) => (
              <Link
                key={f.id}
                href={filterHref(f.id)}
                scroll={false}
                aria-current={active === f.id ? "page" : undefined}
                className={cn("wk-filter", active === f.id && "is-active")}
              >
                {f.label}
                <span>{f.count}</span>
              </Link>
            ))}
          </nav>

          {sections.map((section) => (
            <section key={section.filter} className="wk-section" aria-labelledby={`wk-${section.filter}`}>
              <div className="wk-section__head">
                <h2 id={`wk-${section.filter}`}>{section.title}</h2>
                <p>{section.description}</p>
              </div>
              <ul className="wk-list">
                {section.items.map((p) => {
                  const ongoing = isOngoing(p);
                  const challenge = text(p, "challenge");
                  const solution = text(p, "solution");
                  return (
                    <li key={p.id} id={p.id} className="wk-item" data-reveal>
                      <div className="wk-item__meta">
                        <p className="wk-item__sector">{p.sector}</p>
                        <ul className="wk-badges">
                          {ongoing && <li className="is-live">Ongoing</li>}
                          <li>{kindLabel[p.kind]}</li>
                          <li>{p.timeline}</li>
                        </ul>
                      </div>

                      <div className="wk-item__body">
                        <h3>{p.title}</h3>
                        <p className="wk-item__headline">{p.headline}</p>
                        <p className="wk-item__desc">{p.description}</p>
                        {(challenge || solution) && (
                          <dl className="wk-story">
                            {challenge && (
                              <div>
                                <dt>Challenge</dt>
                                <dd>{challenge}</dd>
                              </div>
                            )}
                            {solution && (
                              <div>
                                <dt>Approach</dt>
                                <dd>{solution}</dd>
                              </div>
                            )}
                          </dl>
                        )}
                        <Links project={p} />
                      </div>

                      <div className="wk-item__side">
                        <dl className="wk-stats">
                          {p.stats.map((s, i) => (
                            <div key={`${s.label}-${i}`}>
                              <dd>{s.value}</dd>
                              <dt>{s.label}</dt>
                            </div>
                          ))}
                        </dl>
                        <ul className="pdp-chips wk-stack" aria-label={`${p.title} technology stack`}>
                          {p.stack.map((t, i) => (
                            <li key={`${t}-${i}`}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <HomeFinalCta />
    </div>
  );
}
