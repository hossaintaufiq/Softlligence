import { comparison, whySoftlligence } from "@/lib/content";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

interface ComparisonProps {
  summary?: boolean;
}

export function Comparison({ summary = false }: ComparisonProps) {
  if (summary) {
    return (
      <section className="section-perf border-y border-white/5 bg-ink py-14 md:py-20">
        <Container>
          <Reveal>
            <Eyebrow number="05">WHY SOFTLLIGENCE</Eyebrow>
            <SectionTitle className="mb-8">
              Reasons organizations pick us as their build partner.
            </SectionTitle>
          </Reveal>
          <div className="grid gap-4 max-[720px]:grid-cols-1 sm:grid-cols-2">
            {whySoftlligence.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 70}>
                <div className="relative h-full rounded-[14px] border border-white/9 bg-panel p-6 sm:p-7">
                  <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 font-mono text-xs font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-semibold">{reason.title}</h3>
                  <p className="m-0 text-[14px] leading-relaxed text-text-dim">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="section-perf border-y border-white/5 bg-ink py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow number="05">WHY SOFTLLIGENCE</Eyebrow>
          <SectionTitle>What changes when you switch from a template shop to a build partner.</SectionTitle>
        </Reveal>

        <div className="grid gap-4 sm:gap-5.5 max-[980px]:grid-cols-1 min-[981px]:grid-cols-2">
          <Reveal delay={80}>
            <div className="pro-card h-full p-6 sm:p-8">
              <h4 className="mb-4.5 font-display text-lg font-semibold">Typical template agency</h4>
              <ul>
                {comparison.them.map((item) => (
                  <li key={item} className="mb-3.5 flex gap-2.5 text-[14.5px] text-text-dim">
                    <span className="text-danger">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative h-full rounded-[14px] border border-accent bg-linear-to-br from-accent/10 to-panel-2 p-6 shadow-[0_0_40px_rgba(255,176,32,0.08)] sm:p-8">
              <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 font-mono text-[11.5px] font-bold text-accent-ink">
                Softlligence
              </span>
              <h4 className="mb-4.5 font-display text-lg font-semibold">Us</h4>
              <ul>
                {comparison.us.map((item) => (
                  <li key={item} className="mb-3.5 flex gap-2.5 text-[14.5px] text-text">
                    <span className="text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
