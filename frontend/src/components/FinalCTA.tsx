import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="section-perf relative overflow-hidden bg-panel py-16 md:py-[90px]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-accent/5 via-transparent to-accent-2/5" aria-hidden="true" />
      <Container className="relative flex flex-wrap items-center justify-between gap-6 max-[720px]:flex-col max-[720px]:items-start">
        <Reveal>
          <h2 className="max-w-[600px] font-display text-[clamp(24px,3.2vw,38px)] font-semibold tracking-tight">
            Let&apos;s build something your organization can rely on.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Button href="/contact" size="lg">
            Book a call
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
