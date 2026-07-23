import {
  clientProjects,
  aiMlProjects,
  toolsProjects,
  templateProjects,
} from "@/lib/content";
import { FinalCTA } from "@/components/FinalCTA";
import { WorkFilters } from "@/components/work-page/WorkFilters";
import { ProjectCaseStudy } from "@/components/work-page/ProjectCaseStudy";
import { WorkBottomCta } from "@/components/work-page/WorkBottomCta";
import { WorkScrollProgress } from "@/components/work-page/WorkScrollProgress";
import { WorkHero } from "@/components/work-page/WorkHero";
import {
  isOngoing,
  sortOngoingFirst,
  type WorkFilter,
  type WorkItem,
} from "@/components/work-page/workShared";
import "@/components/work-page/work-page.css";

export type { WorkFilter };

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

function getSections(filter: WorkFilter) {
  const sections = [
    {
      filter: "web-app" as const,
      title: "Web & App",
      description: "Client websites and applications — ongoing builds tagged clearly.",
      items: sortOngoingFirst(clientProjects),
    },
    {
      filter: "ai-ml" as const,
      title: "AI & ML",
      description: "LLM integrations, automation, RAG, and intelligent workflows.",
      items: sortOngoingFirst(aiMlProjects),
    },
    {
      filter: "tools" as const,
      title: "Tools & utilities",
      description: "Internal dashboards, routing, and ops tools we build and use.",
      items: sortOngoingFirst(toolsProjects),
    },
    {
      filter: "templates" as const,
      title: "Industry templates",
      description: "Sector-ready starters — we rebrand, extend, and ship for your business.",
      items: [...templateProjects],
    },
  ];

  if (filter === "all") return sections;
  return sections.filter((section) => section.filter === filter);
}

function isFeatured(project: WorkItem, indexInSection: number, items: readonly WorkItem[]) {
  const firstOngoing = items.findIndex(isOngoing);
  if (firstOngoing >= 0) return indexInSection === firstOngoing;
  return indexInSection === 0;
}

export function WorkDetail({ filter = "all" }: { filter?: WorkFilter }) {
  const activeFilter = filters.some((f) => f.id === filter) ? filter : "all";
  const sectionsToShow = getSections(activeFilter);
  let cardIndex = 0;

  return (
    <div className="work-page">
      <WorkScrollProgress />
      <WorkHero />

      <section className="wp-portfolio" id="portfolio" aria-labelledby="wp-portfolio-title">
        <div className="wp-container">
          <header className="wp-portfolio__head">
            <p className="wp-eyebrow">Portfolio</p>
            <h2 id="wp-portfolio-title">Engineering products used by real organizations.</h2>
            <p className="wp-portfolio__sub">
              Filter by category — web &amp; app, AI/ML, tools, and templates. Ongoing projects stay
              in their category with an Ongoing tag.
            </p>
          </header>

          <WorkFilters filters={filters} activeFilter={activeFilter} />

          <div className="wp-sections">
            {sectionsToShow.map((section) => {
              const startIndex = cardIndex;
              cardIndex += section.items.length;
              const sectionTitleId = `wp-section-${section.filter}`;

              return (
                <section
                  key={section.filter}
                  className="wp-section"
                  aria-labelledby={sectionTitleId}
                >
                  <div className="wp-section__head">
                    <div className="wp-section__rule" aria-hidden="true" />
                    <h3 id={sectionTitleId}>{section.title}</h3>
                    {activeFilter === "all" ? <p>{section.description}</p> : null}
                  </div>

                  <div className="wp-section__grid">
                    {section.items.map((project, i) => {
                      const featured = isFeatured(project, i, section.items);
                      return (
                        <div
                          key={project.id}
                          className={featured ? "wp-grid-span-full" : undefined}
                        >
                          <ProjectCaseStudy
                            project={project}
                            index={startIndex + i}
                            featured={featured}
                          />
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <WorkBottomCta />
      <FinalCTA />
    </div>
  );
}
