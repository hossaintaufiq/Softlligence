import { industries, industryPrinciples, industryStats } from "@/lib/content";
import { IndustryIcon } from "@/components/IndustryIcon";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/FinalCTA";

export function IndustriesDetail() {
  return (
    <>
      {/* Trust stats */}
      <section className="border-b border-white/5 bg-ink py-12 md:py-16">
        <Container>
          <Reveal>
            <p className="mx-auto mb-8 max-w-[640px] text-center text-[15px] text-text-dim md:text-base">
              Organizations across six sectors trust us to ship software their teams and users rely
              on every day — with the security, uptime and clarity a professional build demands.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-[14px] border border-white/9 bg-white/9 max-[480px]:grid-cols-1 sm:grid-cols-3">
            {industryStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="bg-panel px-6 py-8 text-center sm:py-10">
                  <div className="mb-1.5 font-display text-[clamp(32px,4vw,44px)] font-semibold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-dim">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
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
            className={`section-perf scroll-mt-24 py-16 md:py-24 ${isAlt ? "bg-panel" : "bg-ink"}`}
          >
            <Container>
              <div
                className={`grid items-start gap-10 lg:gap-16 ${
                  isReversed
                    ? "lg:grid-cols-[1fr_1.1fr]"
                    : "lg:grid-cols-[1.1fr_1fr]"
                }`}
              >
                {/* Main content */}
                <Reveal className={isReversed ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-start gap-4">
                    <IndustryIcon id={industry.id} />
                    <div>
                      <span className="font-mono text-[11.5px] tracking-[0.06em] text-accent-2 uppercase">
                        {industry.tag}
                      </span>
                      <p className="mt-1 font-mono text-xs text-text-dim">Sector {industry.index}</p>
                    </div>
                  </div>

                  <h2 className="mt-5 mb-2 font-display text-[clamp(26px,3.5vw,38px)] leading-tight font-semibold tracking-tight">
                    {industry.title}
                  </h2>
                  <p className="mb-4 text-lg text-accent">{industry.headline}</p>
                  <p className="mb-8 max-w-[560px] text-[15px] leading-relaxed text-text-dim md:text-base">
                    {industry.longDescription}
                  </p>

                  <div className="mb-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] text-danger uppercase">
                        <span aria-hidden="true">✕</span> Common challenges
                      </h3>
                      <ul className="space-y-2.5">
                        {industry.painPoints.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2.5 text-[13.5px] leading-snug text-text-dim"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] text-accent uppercase">
                        <span aria-hidden="true">✓</span> What you get
                      </h3>
                      <ul className="space-y-2.5">
                        {industry.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex gap-2.5 text-[13.5px] leading-snug text-text"
                          >
                            <span className="mt-0.5 shrink-0 text-accent">→</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {industry.clients.map((client) => (
                      <span key={client} className="tech-pill">
                        {client}
                      </span>
                    ))}
                  </div>
                </Reveal>

                {/* Side panel */}
                <Reveal delay={120} className={isReversed ? "lg:order-1" : "lg:order-2"}>
                  <div className="pro-card sticky top-24 overflow-hidden p-0">
                    {/* Metric highlight */}
                    <div className="border-b border-white/9 bg-linear-to-br from-accent/10 to-transparent px-6 py-8 sm:px-8">
                      <p className="mb-1 font-mono text-[11px] tracking-[0.06em] text-text-dim uppercase">
                        Typical outcome
                      </p>
                      <div className="font-display text-[clamp(36px,5vw,52px)] font-semibold text-accent">
                        {industry.metric.value}
                      </div>
                      <p className="mt-1 text-sm text-text-dim">{industry.metric.label}</p>
                    </div>

                    <div className="space-y-6 p-6 sm:p-8">
                      <div>
                        <h3 className="mb-3 font-mono text-[11px] tracking-[0.06em] text-accent-2 uppercase">
                          What we build
                        </h3>
                        <ul className="space-y-2">
                          {industry.examples.map((ex) => (
                            <li
                              key={ex}
                              className="relative pl-4 text-[14px] text-text before:absolute before:top-2.5 before:left-0 before:h-px before:w-2 before:bg-accent-2 before:content-['']"
                            >
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 font-mono text-[11px] tracking-[0.06em] text-accent-2 uppercase">
                          Built-in capabilities
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {industry.capabilities.map((cap) => (
                            <span key={cap} className="tech-pill">
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button href="/contact" block size="lg">
                        Discuss your {industry.tag.toLowerCase()} project
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Principles */}
      <section className="section-perf border-t border-white/5 bg-panel py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="03">HOW WE WORK ACROSS SECTORS</Eyebrow>
            <SectionTitle>Same rigor, whether you&apos;re a city hall or a clinic.</SectionTitle>
          </Reveal>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {industryPrinciples.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 80}>
                <div className="pro-card pro-card--alt h-full p-6 sm:p-8">
                  <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 font-mono text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-semibold">{principle.title}</h3>
                  <p className="m-0 text-[14px] leading-relaxed text-text-dim">
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
