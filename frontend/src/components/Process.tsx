import { processSteps } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";

interface ProcessProps {
  summary?: boolean;
  limit?: number;
}

export function Process({ summary = false, limit = 3 }: ProcessProps) {
  const steps = summary ? processSteps.slice(0, limit) : processSteps;

  return (
    <section className="py-24" id="process">
      <Container>
        <Eyebrow number="04">HOW A PROJECT RUNS</Eyebrow>
        <SectionTitle>
          {summary
            ? "Five stages — here are the first three."
            : "Five stages. No stage starts before the last one is signed off."}
        </SectionTitle>

        <ol className="flex flex-col">
          {steps.map((step, i) => (
            <li
              key={step.num}
              className={`flex gap-7 border-t border-white/9 py-[26px] ${!summary && i === steps.length - 1 ? "border-b" : ""}`}
            >
              <span className="min-w-[38px] font-mono text-sm text-accent">{step.num}</span>
              <div className="flex-1">
                <h4 className="mb-1.5 font-display text-[19px] font-semibold">{step.title}</h4>
                <p className="m-0 max-w-[640px] text-[15px] text-text-dim">{step.description}</p>

                {!summary && (
                  <div className="mt-4 flex flex-wrap gap-6">
                    <div>
                      <p className="mb-1 font-mono text-[11px] tracking-[0.04em] text-accent-2 uppercase">
                        Deliverables
                      </p>
                      <ul>
                        {step.deliverables.map((d) => (
                          <li key={d} className="text-[13px] text-text-dim">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1 font-mono text-[11px] tracking-[0.04em] text-accent-2 uppercase">
                        Typical duration
                      </p>
                      <p className="text-[13px] text-text-dim">{step.duration}</p>
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        {summary && (
          <div className="mt-6">
            <SectionLink href={pageRoutes.process}>See full process</SectionLink>
          </div>
        )}
      </Container>
    </section>
  );
}
