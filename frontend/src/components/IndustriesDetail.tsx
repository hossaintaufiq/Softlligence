import { industries, industryPrinciples } from "@/lib/content";
import { IndustryIcon } from "@/components/IndustryIcon";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/FinalCTA";

export function IndustriesDetail() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-white/8 bg-ink py-10 sm:py-12 md:py-16">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-[640px] text-center text-[14px] leading-relaxed text-text-dim sm:text-[15px] md:text-base">
              Organizations across six sectors trust us to ship software their teams and users rely
              on every day — with the security, uptime and clarity a professional build demands.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Industry deep-dives */}
      {industries.map((industry, i) => {
        const isAlt = i % 2 === 1;
        const isReversed = i % 2 === 1;

        return (
          <section
            key={industry.id}
            id={industry.id}
            className={`section-perf py-12 sm:py-16 md:py-24 ${isAlt ? "bg-panel" : "bg-ink"}`}
          >
            <Container>
              <div
                className={`grid items-start gap-6 sm:gap-8 lg:gap-14 ${
                  isReversed
                    ? "lg:grid-cols-[1fr_1.05fr]"
                    : "lg:grid-cols-[1.05fr_1fr]"
                }`}
              >
                {/* Metric / side panel — first on mobile for visual punch */}
                <Reveal
                  delay={40}
                  className={isReversed ? "lg:order-1" : "lg:order-2"}
                >
                  <article className="industry-card overflow-hidden rounded-[20px] border border-white/10 bg-ink/40 shadow-[var(--shadow-card)] backdrop-blur-md lg:sticky lg:top-40">
                    <div className="relative border-b border-white/9 bg-linear-to-br from-accent/12 via-accent/5 to-transparent px-5 py-7 sm:px-7 sm:py-8">
                      <div
                        className="pointer-events-none absolute -top-12 -right-10 h-36 w-36 rounded-full bg-accent/15 blur-3xl"
                        aria-hidden="true"
                      />
                      <p className="relative mb-1.5 font-mono text-[10px] tracking-[0.12em] text-text-dim uppercase sm:text-[11px]">
                        Typical outcome
                      </p>
                      <div className="relative font-display text-[clamp(40px,12vw,52px)] leading-none font-semibold text-accent">
                        {industry.metric.value}
                      </div>
                      <p className="relative mt-2 text-[13px] text-text-dim sm:text-sm">
                        {industry.metric.label}
                      </p>
                    </div>

                    <div className="space-y-5 p-5 sm:space-y-6 sm:p-7">
                      <div>
                        <h3 className="mb-3 font-mono text-[10px] tracking-[0.12em] text-accent-2 uppercase sm:text-[11px]">
                          What we build
                        </h3>
                        <ul className="m-0 space-y-2.5 p-0">
                          {industry.examples.map((ex) => (
                            <li
                              key={ex}
                              className="relative pl-4 text-[13.5px] leading-snug text-text before:absolute before:top-2.5 before:left-0 before:h-px before:w-2 before:bg-accent-2 before:content-[''] sm:text-[14px]"
                            >
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 font-mono text-[10px] tracking-[0.12em] text-accent-2 uppercase sm:text-[11px]">
                          Built-in capabilities
                        </h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {industry.capabilities.map((cap) => (
                            <span key={cap} className="tech-pill max-w-full break-words">
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        href="/contact"
                        block
                        size="lg"
                        className="min-h-12 whitespace-normal text-center text-[14px] leading-snug sm:text-[15px]"
                      >
                        Discuss your {industry.tag.toLowerCase()} project
                      </Button>
                    </div>
                  </article>
                </Reveal>

                {/* Main content */}
                <Reveal className={isReversed ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <IndustryIcon id={industry.id} />
                    <div className="min-w-0 pt-0.5">
                      <span className="font-mono text-[11px] tracking-[0.08em] text-accent-2 uppercase sm:text-[11.5px]">
                        {industry.tag}
                      </span>
                      <p className="mt-1 font-mono text-[11px] text-text-dim sm:text-xs">
                        Sector {industry.index}
                      </p>
                    </div>
                  </div>

                  <h2 className="mt-5 mb-3 font-display text-[clamp(24px,6.5vw,38px)] leading-[1.12] font-semibold tracking-tight">
                    {industry.title}
                  </h2>
                  <p className="mb-4 text-[16px] leading-snug text-accent sm:text-lg">
                    {industry.headline}
                  </p>
                  <p className="mb-7 max-w-[560px] text-[14.5px] leading-relaxed text-text-dim sm:mb-8 sm:text-[15px] md:text-base">
                    {industry.longDescription}
                  </p>

                  <div className="mb-7 grid gap-4 sm:mb-8 sm:gap-5 md:grid-cols-2 md:gap-6">
                    <div className="rounded-[16px] border border-white/8 bg-ink/25 p-4 sm:bg-transparent sm:p-0 sm:border-0">
                      <h3 className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-danger uppercase sm:text-[11px]">
                        <span aria-hidden="true">✕</span> Common challenges
                      </h3>
                      <ul className="m-0 space-y-2.5 p-0">
                        {industry.painPoints.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2.5 text-[13px] leading-snug text-text-dim sm:text-[13.5px]"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                            <span className="min-w-0">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[16px] border border-accent/20 bg-accent/5 p-4 sm:border-0 sm:bg-transparent sm:p-0">
                      <h3 className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-accent uppercase sm:text-[11px]">
                        <span aria-hidden="true">✓</span> What you get
                      </h3>
                      <ul className="m-0 space-y-2.5 p-0">
                        {industry.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex gap-2.5 text-[13px] leading-snug text-text sm:text-[13.5px]"
                          >
                            <span className="mt-0.5 shrink-0 text-accent">→</span>
                            <span className="min-w-0">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {industry.clients.map((client) => (
                      <span key={client} className="tech-pill max-w-full break-words">
                        {client}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Principles */}
      <section className="section-perf border-t border-white/8 bg-panel py-12 sm:py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="03">HOW WE WORK ACROSS SECTORS</Eyebrow>
            <SectionTitle>
              Same rigor, whether you&apos;re a city hall or a clinic.
            </SectionTitle>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {industryPrinciples.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 70}>
                <div className="industry-card h-full rounded-[18px] border border-white/10 bg-ink/30 p-5 backdrop-blur-sm sm:bg-panel-2/80 sm:p-7 md:p-8">
                  <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 font-mono text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 font-display text-base font-semibold sm:text-lg">
                    {principle.title}
                  </h3>
                  <p className="m-0 text-[13.5px] leading-relaxed text-text-dim sm:text-[14px]">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
