import type { ReactNode } from "react";
import { projects, workStats } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/FinalCTA";

function ExternalLink({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: ReactNode;
  variant?: "default" | "accent";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[12px] transition-all duration-200 hover:-translate-y-px ${
        variant === "accent"
          ? "border-accent/40 bg-accent/10 text-accent hover:bg-accent/20"
          : "border-white/12 bg-panel text-text-dim hover:border-accent-2/40 hover:text-text"
      }`}
    >
      {children}
    </a>
  );
}

export function WorkDetail() {
  return (
    <>
      {/* Compact metric strip */}
      <section className="border-b border-white/5 bg-ink">
        <Container>
          <div className="grid grid-cols-1 divide-y divide-white/9 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {workStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60}>
                <div className="flex items-baseline gap-3 px-1 py-6 sm:px-6 sm:py-8">
                  <span className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-[13px] text-text-dim">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Listed portfolio */}
      <section className="section-perf bg-ink py-12 md:py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <p className="font-mono text-[12px] tracking-[0.06em] text-text-dim">
                <span className="text-accent">⟨</span> PORTFOLIO INDEX{" "}
                <span className="text-accent">⟩</span>
              </p>
              <h2 className="mt-2 font-display text-[clamp(22px,3vw,32px)] font-semibold tracking-tight">
                Selected builds
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-[320px] text-right text-[13px] text-text-dim max-[640px]:text-left">
                Numbered index · open live site or GitHub when available
              </p>
            </Reveal>
          </div>

          <div className="overflow-hidden rounded-[14px] border border-white/9">
            {/* Desktop table header */}
            <div className="hidden border-b border-white/9 bg-panel px-6 py-3 font-mono text-[11px] tracking-[0.06em] text-text-dim uppercase md:grid md:grid-cols-[56px_1.4fr_1fr_1.2fr_auto] md:gap-4">
              <span>#</span>
              <span>Project</span>
              <span>Sector</span>
              <span>Impact</span>
              <span className="text-right">Links</span>
            </div>

            <ul className="m-0 list-none divide-y divide-white/9 p-0">
              {projects.map((project, i) => (
                <Reveal key={project.id} delay={i * 70}>
                  <li
                    id={project.id}
                    className="scroll-mt-28 bg-ink transition-colors hover:bg-panel/60"
                  >
                    {/* Desktop row */}
                    <div className="hidden items-center gap-4 px-6 py-6 md:grid md:grid-cols-[56px_1.4fr_1fr_1.2fr_auto]">
                      <span className="font-mono text-sm text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h3 className="mb-1 font-display text-[17px] leading-snug font-semibold">
                          {project.title}
                        </h3>
                        <p className="m-0 truncate text-[13px] text-text-dim">
                          {project.headline}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {project.stack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded border border-white/8 px-2 py-0.5 font-mono text-[10px] text-text-dim"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="m-0 font-mono text-[12px] text-accent-2">{project.sector}</p>
                        <p className="m-0 mt-1 text-[12px] text-text-dim">{project.type}</p>
                        <p className="m-0 mt-1 text-[12px] text-text-dim">{project.timeline}</p>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        {project.stats.slice(0, 2).map((stat) => (
                          <div key={stat.label} className="flex items-baseline gap-2">
                            <span className="font-display text-base font-semibold text-accent">
                              {stat.value}
                            </span>
                            <span className="text-[11px] text-text-dim">{stat.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        {project.liveUrl && (
                          <ExternalLink href={project.liveUrl} variant="accent">
                            <span aria-hidden="true">↗</span> Live site
                          </ExternalLink>
                        )}
                        {project.github && (
                          <ExternalLink href={project.github}>
                            <span aria-hidden="true">⌘</span> GitHub
                          </ExternalLink>
                        )}
                      </div>
                    </div>

                    {/* Mobile card row */}
                    <div className="p-5 md:hidden">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <span className="font-mono text-sm text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="rounded-full border border-accent-2/30 bg-accent-2/10 px-2.5 py-0.5 font-mono text-[10px] text-accent-2">
                          {project.sector}
                        </span>
                      </div>
                      <h3 className="mb-1 font-display text-[17px] font-semibold">{project.title}</h3>
                      <p className="mb-3 text-[13px] text-text-dim">{project.description}</p>

                      <div className="mb-4 flex flex-wrap gap-4 border-t border-white/9 pt-3">
                        {project.stats.slice(0, 2).map((stat) => (
                          <div key={stat.label}>
                            <strong className="block font-display text-lg text-accent">
                              {stat.value}
                            </strong>
                            <span className="text-[11px] text-text-dim">{stat.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.liveUrl && (
                          <ExternalLink href={project.liveUrl} variant="accent">
                            <span aria-hidden="true">↗</span> Live site
                          </ExternalLink>
                        )}
                        {project.github && (
                          <ExternalLink href={project.github}>
                            GitHub
                          </ExternalLink>
                        )}
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="mt-8" delay={100}>
            <p className="text-center text-[13px] text-text-dim">
              Links point to representative demos where client confidentiality allows.
              Private repos can be shared under NDA.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="section-perf border-t border-white/5 bg-panel py-14 md:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="mb-2 font-display text-[clamp(22px,3vw,32px)] font-semibold tracking-tight">
                  Building something similar?
                </h2>
                <p className="m-0 max-w-[480px] text-[14px] text-text-dim">
                  Tell us the problem. We&apos;ll tell you honestly if we&apos;re a fit — and what
                  a first milestone could look like.
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
