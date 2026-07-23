import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { pageRoutes } from "@/lib/navigation";

export function HomeFinalCta() {
  return (
    <section className="hp-cta" id="contact" aria-labelledby="hp-cta-title">
      <div className="hp-cta__bg" aria-hidden="true" />
      <Container className="hp-cta__inner">
        <h2 id="hp-cta-title">Let&apos;s Build Software That Moves Your Business Forward.</h2>
        <p>
          Whether you&apos;re planning an ERP, CRM, AI platform, manufacturing software, or a custom
          digital solution, we&apos;re ready to engineer it together.
        </p>
        <div className="hp-cta__actions">
          <Button href={pageRoutes.contact} size="lg" className="hp-magnetic">
            Start Your Project
          </Button>
          <Button href={pageRoutes.contact} variant="outline" size="lg" className="hp-magnetic">
            Book a Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
