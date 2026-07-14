import { comparison } from "@/lib/content";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";

interface ComparisonProps {
  summary?: boolean;
}

export function Comparison({ summary = false }: ComparisonProps) {
  if (summary) {
    return (
      <section className="border-y border-white/5 bg-ink py-16">
        <Container>
          <Eyebrow number="05">WHY SOFTLLIGENCE</Eyebrow>
          <SectionTitle className="mb-6">
            What changes when you switch from a template shop to a build partner.
          </SectionTitle>
          <div className="grid gap-4 max-[720px]:grid-cols-1 min-[721px]:grid-cols-2">
            {comparison.us.slice(0, 2).map((item) => (
              <div
                key={item}
                className="flex gap-2.5 rounded-[14px] border border-white/9 bg-panel p-5 text-[14.5px]"
              >
                <span className="text-accent">✓</span>
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-y border-white/5 bg-ink py-24">
      <Container>
        <Eyebrow number="05">WHY NORTHSTACK</Eyebrow>
        <SectionTitle>What changes when you switch from a template shop to a build partner.</SectionTitle>

        <div className="grid gap-5.5 max-[980px]:grid-cols-1 min-[981px]:grid-cols-2">
          <div className="rounded-[14px] border border-white/9 bg-panel p-8">
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

          <div className="relative rounded-[14px] border border-accent bg-linear-to-br from-accent/10 to-panel-2 p-8">
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
        </div>
      </Container>
    </section>
  );
}
