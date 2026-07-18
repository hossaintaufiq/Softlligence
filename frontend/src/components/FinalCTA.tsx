import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="section-perf relative overflow-hidden bg-panel py-16 md:py-[90px]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-accent/5 via-transparent to-accent-2/5" aria-hidden="true" />
      <Container className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:flex-wrap sm:items-center">
        <Reveal>
          <h2 className="max-w-[600px] font-display text-[clamp(22px,5vw,38px)] font-semibold tracking-tight">
            Let&apos;s build something your organization can rely on.
          </h2>
        </Reveal>
        <Reveal delay={120} className="w-full sm:w-auto max-[720px]:w-full">
          <Button href="/contact" size="lg" className="max-sm:w-full">
            Book a call
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
