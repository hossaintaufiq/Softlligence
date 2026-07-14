import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export function FinalCTA() {
  return (
    <section className="bg-panel py-[90px]">
      <Container className="flex flex-wrap items-center justify-between gap-6 max-[720px]:flex-col max-[720px]:items-start">
        <h2 className="max-w-[600px] font-display text-[clamp(26px,3.2vw,38px)] font-semibold tracking-tight">
          Let&apos;s build something your organization can rely on.
        </h2>
        <Button href="#contact" size="lg">
          Book a call
        </Button>
      </Container>
    </section>
  );
}
