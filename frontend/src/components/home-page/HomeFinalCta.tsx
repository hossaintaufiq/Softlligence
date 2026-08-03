import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { pageRoutes } from "@/lib/navigation";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";

export function HomeFinalCta() {
  return (
    <section className="hp-cta" id="contact" aria-labelledby="hp-cta-title">
      <div className="hp-cta__bg" aria-hidden="true" />
      <Container className="hp-cta__inner">
        <SketchHeadline id="hp-cta-title" className="sketch-headline--cta">
          Let&apos;s Build <SketchMark type="circle">Software</SketchMark> That Moves Your Business{" "}
          <SketchMark type="underline">Forward</SketchMark>.
        </SketchHeadline>
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
