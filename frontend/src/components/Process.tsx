import Image from "next/image";
import { processSteps } from "@/lib/content";
import { processStepImages } from "@/lib/homeVisuals";
import { pageRoutes } from "@/lib/navigation";
import { Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface ProcessProps {
  summary?: boolean;
  limit?: number;
}

type Step = (typeof processSteps)[number];

function ProcessStepCard({
  step,
  side,
}: {
  step: Step;
  side: "left" | "right";
}) {
  return (
    <article
      className={`pro-card pro-card--interactive group relative h-full p-6 sm:p-7 ${
        side === "left" ? "md:text-right" : "md:text-left"
      }`}
    >
      <span
        className={`absolute top-3 hidden h-4 w-4 border-accent opacity-70 md:block ${
          side === "left"
            ? "right-3 border-t-2 border-r-2"
            : "left-3 border-b-2 border-l-2"
        }`}
        aria-hidden="true"
      />
      <span className="mb-2 inline-block font-mono text-xs text-accent-2">{step.duration}</span>
      <h4 className="mb-2 font-display text-xl font-semibold">{step.title}</h4>
      <p className="mb-4 text-[14.5px] text-text-dim">{step.description}</p>
      <div className={side === "left" ? "md:ml-auto md:text-right" : ""}>
        <p className="mb-2 font-mono text-[11px] tracking-[0.04em] text-accent-2 uppercase">
          Deliverables
        </p>
        <ul className={side === "left" ? "md:items-end" : ""}>
          {step.deliverables.map((d) => (
            <li
              key={d}
              className={`relative mb-1.5 text-[13px] text-text-dim ${
                side === "left"
                  ? "pl-4 md:pl-0 md:pr-4 md:before:right-0 md:before:left-auto"
                  : "pl-4"
              } before:absolute before:top-2 before:left-0 before:h-px before:w-1.5 before:bg-accent before:content-['']`}
            >
              {d}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function RoadNode({ step, isLast, mobile }: { step: Step; isLast: boolean; mobile?: boolean }) {
  return (
    <div className={`relative z-10 flex flex-col items-center ${mobile ? "pt-1" : "pt-2"}`}>
      <div className={mobile ? "road-node road-node--sm" : "road-node"}>
        <span className={`font-mono font-bold text-accent-ink ${mobile ? "text-[10px]" : "text-xs"}`}>
          {step.num}
        </span>
      </div>
      {!isLast && mobile && <div className="road-segment-mobile" aria-hidden="true" />}
    </div>
  );
}

function ProcessRoad({ steps }: { steps: Step[] }) {
  return (
    <div className="process-road relative mx-auto max-w-[960px]">
      <div className="road-spine pointer-events-none absolute top-0 bottom-0 left-1/2 hidden w-5 -translate-x-1/2 md:block" aria-hidden="true">
        <div className="road-asphalt" />
        <div className="road-dashes" />
      </div>

      <div className="road-spine-mobile pointer-events-none absolute top-0 bottom-0 left-[18px] w-5 md:hidden" aria-hidden="true">
        <div className="road-asphalt" />
        <div className="road-dashes" />
      </div>

      <ol className="relative m-0 list-none p-0">
        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;
          const isLast = i === steps.length - 1;

          return (
            <Reveal key={step.num} delay={i * 100}>
              <li className={`process-road-step ${isLast ? "process-road-step--last" : ""}`}>
                <div className="hidden md:grid md:grid-cols-[1fr_56px_1fr] md:items-start md:gap-6">
                  <div className={`relative pt-2 ${isLeft ? "" : "invisible pointer-events-none"}`}>
                    {isLeft && (
                      <>
                        <ProcessStepCard step={step} side="left" />
                        <span
                          className="absolute top-10 right-[-1.75rem] hidden h-px w-7 bg-linear-to-l from-accent/50 to-transparent md:block"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </div>

                  <div className="flex justify-center pt-2">
                    <RoadNode step={step} isLast={isLast} />
                  </div>

                  <div className={`relative pt-2 ${!isLeft ? "" : "invisible pointer-events-none"}`}>
                    {!isLeft && (
                      <>
                        <span
                          className="absolute top-10 left-[-1.75rem] hidden h-px w-7 bg-linear-to-r from-accent/50 to-transparent md:block"
                          aria-hidden="true"
                        />
                        <ProcessStepCard step={step} side="right" />
                      </>
                    )}
                  </div>
                </div>

                <div className="flex gap-5 pl-2 md:hidden">
                  <RoadNode step={step} isLast={isLast} mobile />
                  <div className="min-w-0 flex-1 pb-10">
                    <ProcessStepCard step={step} side="right" />
                  </div>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>

      <Reveal delay={steps.length * 100} className="relative z-10 mt-2 hidden justify-center md:flex">
        <div className="road-finish">
          <span className="font-mono text-[10px] tracking-widest text-accent uppercase">Launch ready</span>
        </div>
      </Reveal>
    </div>
  );
}

function ProcessSummaryVisual({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {steps.map((step, i) => (
        <Reveal key={step.num} delay={i * 80}>
          <article className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-ink">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={processStepImages[i] ?? processStepImages[0]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" aria-hidden="true" />
              <span className="absolute top-3 left-3 font-mono text-2xl font-bold text-accent/90">
                {step.num}
              </span>
            </div>
            <div className="p-5">
              <span className="mb-1 block font-mono text-[11px] text-accent-2">{step.duration}</span>
              <h4 className="mb-1.5 font-display text-lg font-semibold">{step.title}</h4>
              <p className="m-0 line-clamp-2 text-[13.5px] leading-relaxed text-text-dim">
                {step.description}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function Process({ summary = false, limit = 3 }: ProcessProps) {
  const steps = summary ? processSteps.slice(0, limit) : processSteps;

  return (
    <section className="section-perf py-16 md:py-20" id="process">
      <Container>
        <Reveal>
          <Eyebrow number="04">HOW A PROJECT RUNS</Eyebrow>
          <SectionTitle>
            {summary ? "Three stages to start — five in total." : "Five stages. No stage starts before the last one is signed off."}
          </SectionTitle>
          {summary && (
            <SectionSub>Discovery through build — clear gates, visible progress.</SectionSub>
          )}
        </Reveal>

        <div className={summary ? "" : "mt-10 md:mt-14"}>
          {summary ? <ProcessSummaryVisual steps={steps} /> : <ProcessRoad steps={steps} />}
        </div>

        {summary && (
          <Reveal className="mt-8" delay={200}>
            <SectionLink href={pageRoutes.process}>See full process</SectionLink>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
