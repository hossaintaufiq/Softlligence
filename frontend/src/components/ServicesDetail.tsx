"use client";

import { useEffect, useState } from "react";
import {
  services,
  engagementModels,
  processSteps,
  serviceGuarantees,
  whySoftlligence,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServicesScrollExperience } from "@/components/services/ServicesScrollExperience";
import { cn } from "@/lib/utils";

const processRails = [...processSteps.map((s) => s.title), "Support"];

const trustCards = [...whySoftlligence.slice(0, 3), ...serviceGuarantees].slice(0, 6);

const trustIcons = [
  <path
    key="a"
    d="M4 6h16v10H8l-4 3V6z"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinejoin="round"
  />,
  <path
    key="b"
    d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
  />,
  <path
    key="c"
    d="M4 18V8l8-4 8 4v10M8 12v6M12 10v8M16 12v6"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="d"
    d="M12 3l8 4v5c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V7l8-4z"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
  />,
  <path
    key="e"
    d="M4 12a8 8 0 0114.5-4.5M20 12a8 8 0 01-14.5 4.5M16 4v4h4M8 20v-4H4"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="f"
    d="M12 3l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V6l7-3zM12 11v3M12 8.5h.01"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
  />,
];

const modelIcons = [
  <path
    key="m1"
    d="M4 7h16v10H4V7zm0 0l8 5 8-5"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinejoin="round"
  />,
  <path
    key="m2"
    d="M8 10a3 3 0 116 0 3 3 0 01-6 0zM5 19a6 6 0 0114 0M17 8a2.5 2.5 0 110 5"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
  />,
  <path
    key="m3"
    d="M7 8h10v8H7V8zm3 11h4M12 16v3"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
  />,
];

function SectionDivider() {
  return (
    <div
      className="svc-divider pointer-events-none relative mx-auto h-px w-full max-w-[1180px] px-5"
      aria-hidden="true"
    >
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}

function ProcessRail({ active }: { active: number }) {
  return (
    <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ol className="flex min-w-max items-center justify-center gap-1 sm:gap-2 md:min-w-0 md:flex-wrap md:gap-0">
        {processRails.map((step, i) => {
          const isActive = i === active;
          const isDone = i < active;
          return (
            <li key={step} className="flex items-center">
              <div
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors duration-500 sm:px-4",
                  isActive
                    ? "border-accent/50 bg-accent/15 text-accent"
                    : isDone
                      ? "border-accent-2/30 bg-accent-2/10 text-accent-2"
                      : "border-white/8 bg-panel/50 text-text-dim",
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-md font-mono text-[10px] font-bold",
                    isActive
                      ? "bg-accent text-accent-ink"
                      : isDone
                        ? "bg-accent-2/30 text-accent-2"
                        : "bg-white/5",
                  )}
                >
                  {i + 1}
                </span>
                <span className="font-mono text-[11px] tracking-[0.06em] uppercase sm:text-[12px]">
                  {step}
                </span>
              </div>
              {i < processRails.length - 1 && (
                <span
                  className={cn(
                    "mx-1 hidden h-px w-6 bg-white/15 sm:mx-2 sm:block md:w-8",
                    isDone && "bg-accent-2/40",
                  )}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function ServicesDetail() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const sectionIds = [
      "svc-process",
      ...services.map((s) => s.id),
      "svc-engage",
      "svc-trust",
      "svc-cta",
    ];
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target.id) return;
        const idx = sectionIds.indexOf(visible.target.id);
        if (idx < 0) return;
        const progress = idx / Math.max(sectionIds.length - 1, 1);
        setActiveStep(
          Math.min(processRails.length - 1, Math.round(progress * (processRails.length - 1))),
        );
      },
      { threshold: [0.15, 0.35, 0.55], rootMargin: "-20% 0px -45% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="svc-process" className="section-perf border-b border-white/8 bg-panel py-10 md:py-14">
        <Container>
          <Reveal>
            <p className="mb-6 text-center font-mono text-[11px] tracking-[0.14em] text-text-dim uppercase">
              How delivery moves
            </p>
            <ProcessRail active={activeStep} />
          </Reveal>
        </Container>
      </section>

      {/* ── 3D scroll capabilities ── */}
      <section className="section-perf relative bg-ink">
        <Container className="relative pt-16 md:pt-20">
          <Reveal>
            <Eyebrow number="01">CAPABILITIES</Eyebrow>
            <SectionTitle>Scroll through what we build.</SectionTitle>
            <p className="mb-4 max-w-[560px] text-[15px] leading-relaxed text-text-dim md:mb-0 md:text-base">
              Six capabilities in a guided 3D path. Scroll to move through the stack — or jump with
              the index chips.
            </p>
          </Reveal>
        </Container>

        <ServicesScrollExperience />
      </section>

      <SectionDivider />

      <section id="svc-engage" className="section-perf bg-panel py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow number="02">ENGAGEMENT</Eyebrow>
            <SectionTitle>How we work together</SectionTitle>
            <p className="mb-12 max-w-[520px] text-[15px] text-text-dim">
              Pick the model that matches your roadmap — or start with discovery and we&apos;ll
              recommend one.
            </p>
          </Reveal>

          <div className="grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
            {engagementModels.map((model, i) => {
              const featured = i === 1;
              return (
                <Reveal key={model.title} delay={i * 90}>
                  <article
                    className={cn(
                      "svc-model group relative flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 sm:p-8",
                      featured
                        ? "z-10 border-accent/50 bg-linear-to-b from-accent/15 via-panel to-panel shadow-[0_20px_50px_rgba(0,0,0,0.2)] md:-my-3 md:scale-[1.03]"
                        : "border-white/10 bg-ink/30 backdrop-blur-md hover:border-accent/30 hover:shadow-[var(--shadow-card)]",
                    )}
                  >
                    {featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-accent px-3 py-1 font-mono text-[10px] font-bold tracking-wide text-accent-ink uppercase">
                        Recommended
                      </span>
                    )}
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-panel text-accent transition-colors duration-300 group-hover:border-accent/40">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                        {modelIcons[i]}
                      </svg>
                    </span>
                    <p className="mb-2 font-mono text-[12px] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mb-3 font-display text-xl font-semibold">{model.title}</h3>
                    <p className="mb-6 flex-1 text-[14px] leading-relaxed text-text-dim">
                      {model.description}
                    </p>
                    <ul className="mb-8 space-y-2.5">
                      {model.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-[13.5px] text-text">
                          <span className="text-accent" aria-hidden="true">
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <span className="mb-5 inline-flex w-fit rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-wide text-text-dim uppercase">
                      Best for{" "}
                      {featured ? "roadmap delivery" : i === 0 ? "defined launches" : "flexible capacity"}
                    </span>
                    <Button href="/contact" variant={featured ? "accent" : "outline"} block>
                      {featured ? "Start with dedicated team" : "Discuss this model"}
                    </Button>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section id="svc-trust" className="section-perf bg-ink py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow number="03">TRUST</Eyebrow>
            <SectionTitle>Why organizations choose us</SectionTitle>
            <p className="mb-12 max-w-[520px] text-[15px] text-text-dim">
              The habits that make Softlligence feel like a build partner — not another vendor.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 60}>
                <article className="group h-full rounded-xl border border-white/10 bg-panel/40 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent/35 hover:bg-panel/70 hover:shadow-[var(--shadow-card)] sm:p-7">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                      {trustIcons[i]}
                    </svg>
                  </span>
                  <h3 className="mb-2 font-display text-lg font-semibold">{card.title}</h3>
                  <p className="m-0 text-[14px] leading-relaxed text-text-dim">{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="svc-cta" className="relative overflow-hidden py-24 md:py-32">
        <div className="hero-grid hero-grid--page pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 100%, color-mix(in srgb, var(--theme-accent) 16%, transparent), transparent 65%), radial-gradient(ellipse 40% 50% at 80% 20%, color-mix(in srgb, var(--theme-accent-2) 12%, transparent), transparent)",
          }}
          aria-hidden="true"
        />

        <Container className="relative max-w-[760px] text-center">
          <Reveal>
            <p className="mb-4 font-mono text-[12px] tracking-[0.14em] text-text-dim uppercase">
              <span className="text-accent">/</span> Next step
            </p>
            <h2 className="mb-5 font-display text-[clamp(30px,4.5vw,48px)] font-semibold tracking-tight">
              Let&apos;s build something your organization can rely on.
            </h2>
            <p className="mx-auto mb-10 max-w-[520px] text-[15px] leading-relaxed text-text-dim md:text-base">
              Tell us what you&apos;re building. We reply within one business day with a clear next
              step — no scripted sales call.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Book Discovery Call
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
