import {
  aboutStory,
  aboutSignal,
  aboutBeliefs,
  aboutCraft,
  aboutLeadershipStrip,
  aboutCommitments,
  comparison,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function AboutDetail() {
  return (
    <>
      {/* Hero — one composition */}
      <section className="relative isolate overflow-hidden border-b border-white/8">
        <div className="hero-grid hero-grid--page pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 55% at 85% 10%, color-mix(in srgb, var(--theme-accent-2) 14%, transparent), transparent), radial-gradient(ellipse 50% 40% at 10% 80%, color-mix(in srgb, var(--theme-accent) 10%, transparent), transparent)",
          }}
          aria-hidden="true"
        />
        <Container className="relative py-16 md:py-24 lg:py-28">
          <Reveal>
            <p className="mb-5 font-mono text-[12px] tracking-[0.14em] text-text-dim uppercase">
              <span className="text-accent">/</span> {aboutStory.eyebrow}
            </p>
            <h1 className="mb-6 max-w-[900px] font-display text-[clamp(36px,5.5vw,60px)] leading-[1.05] font-semibold tracking-tight">
              Softlligence{" "}
              <span className="text-gradient">builds software</span> organizations actually run on.
            </h1>
            <p className="max-w-[560px] text-[16px] leading-relaxed text-text-dim md:text-lg">
              {aboutStory.lead}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-white/9 bg-white/9 md:grid-cols-4">
              {aboutSignal.map((item) => (
                <div key={item.label} className="bg-ink px-5 py-5 sm:px-6 sm:py-6">
                  <dt className="mb-1.5 font-mono text-[10px] tracking-[0.14em] text-text-dim uppercase">
                    {item.label}
                  </dt>
                  <dd className="m-0 font-display text-[15px] font-semibold text-text sm:text-base">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Story */}
      <section className="section-perf border-b border-white/8 bg-panel py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <Eyebrow number="01">THE STUDIO</Eyebrow>
              <SectionTitle>Built to ship systems — not sell themes.</SectionTitle>
            </Reveal>
            <div className="space-y-5">
              {aboutStory.body.map((para, i) => (
                <Reveal key={para.slice(0, 24)} delay={i * 80}>
                  <p className="m-0 text-[15px] leading-relaxed text-text-dim md:text-base">{para}</p>
                </Reveal>
              ))}
              <Reveal delay={180}>
                <p className="m-0 border-l-2 border-accent pl-5 font-display text-[17px] leading-snug font-medium text-text md:text-xl">
                  Small enough that you know who builds your product.
                  <span className="text-text-dim"> Structured enough to deliver serious systems.</span>
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Beliefs — editorial list, not card grid clutter */}
      <section className="section-perf border-b border-white/8 bg-ink py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="02">HOW WE THINK</Eyebrow>
            <SectionTitle>Principles that keep delivery sharp.</SectionTitle>
            <p className="mb-12 max-w-[520px] text-[15px] text-text-dim">
              Senior engineering habits, applied to every engagement — from a marketing site rebuild to
              an operational platform.
            </p>
          </Reveal>

          <div className="divide-y divide-white/8 border-y border-white/8">
            {aboutBeliefs.map((belief, i) => (
              <Reveal key={belief.index} delay={i * 60}>
                <article className="grid gap-3 py-8 sm:grid-cols-[88px_1fr] sm:gap-8 md:py-10">
                  <span className="font-mono text-[13px] tracking-[0.12em] text-accent">{belief.index}</span>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-semibold md:text-2xl">{belief.title}</h3>
                    <p className="m-0 max-w-[640px] text-[15px] leading-relaxed text-text-dim">
                      {belief.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Craft */}
      <section className="section-perf border-b border-white/8 bg-panel py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="03">THE CRAFT</Eyebrow>
            <SectionTitle>What we cover end to end.</SectionTitle>
          </Reveal>

          <div className="mt-10 grid gap-8 border-t border-white/8 pt-10 md:grid-cols-3 md:gap-6">
            {aboutCraft.map((column, i) => (
              <Reveal key={column.title} delay={i * 80}>
                <div>
                  <h3 className="mb-5 font-mono text-[11px] tracking-[0.14em] text-accent-2 uppercase">
                    {column.title}
                  </h3>
                  <ul className="m-0 list-none space-y-3 p-0">
                    {column.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-white/8 pb-3 font-display text-[15px] text-text last:border-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership model */}
      <section className="section-perf border-b border-white/8 bg-ink py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="02">LEADERSHIP</Eyebrow>
            <SectionTitle>A compact build team.</SectionTitle>
            <p className="mb-10 max-w-[560px] text-[15px] text-text-dim">
              Softlligence is run by engineers who ship together — strategy and delivery in the same
              hands.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-[14px] border border-white/9 bg-white/9 sm:grid-cols-2 lg:grid-cols-4">
            {aboutLeadershipStrip.map((row, i) => (
              <Reveal key={`${row.role}-${row.focus}`} delay={i * 60}>
                <div className="h-full bg-panel px-5 py-6 sm:px-6">
                  <p className="mb-2 font-mono text-[11px] tracking-[0.08em] text-accent uppercase">
                    {row.role}
                  </p>
                  <p className="m-0 text-[14px] leading-snug text-text-dim">{row.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8" delay={200}>
            <Button href="/team" variant="outline">
              Meet the full team
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Commitments + comparison */}
      <section className="section-perf border-b border-white/8 bg-panel py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="05">COMMITMENTS</Eyebrow>
            <SectionTitle>What you can expect when we work together.</SectionTitle>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div className="space-y-8">
              {aboutCommitments.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="border-l-2 border-accent/50 pl-5">
                    <h3 className="mb-1.5 font-display text-lg font-semibold">{item.title}</h3>
                    <p className="m-0 text-[14.5px] leading-relaxed text-text-dim">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="rounded-[16px] border border-white/10 bg-ink/40 p-6 backdrop-blur-sm sm:p-8">
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/8 pb-5">
                  <div>
                    <p className="mb-1 font-mono text-[11px] tracking-[0.12em] text-text-dim uppercase">
                      vs
                    </p>
                    <h3 className="font-display text-xl font-semibold">Template shops</h3>
                  </div>
                  <p className="rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-bold text-accent-ink">
                    Softlligence
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <ul className="m-0 list-none space-y-3 p-0">
                    {comparison.them.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13.5px] text-text-dim">
                        <span className="mt-0.5 text-danger" aria-hidden="true">
                          ✕
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="m-0 list-none space-y-3 p-0">
                    {comparison.us.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13.5px] text-text">
                        <span className="mt-0.5 text-accent" aria-hidden="true">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, color-mix(in srgb, var(--theme-accent) 12%, transparent), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative max-w-[720px] text-center">
          <Reveal>
            <p className="mb-4 font-mono text-[12px] tracking-[0.14em] text-text-dim uppercase">
              <span className="text-accent">/</span> Next step
            </p>
            <h2 className="mb-4 font-display text-[clamp(28px,4vw,42px)] font-semibold tracking-tight">
              Tell us what you&apos;re building.
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-text-dim md:text-base">
              Share the problem, the deadline, and the constraints. We reply within one business day
              with a clear next step — no scripted sales call.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Start a project
              </Button>
              <Button href="/work" variant="outline" size="lg">
                View work
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
