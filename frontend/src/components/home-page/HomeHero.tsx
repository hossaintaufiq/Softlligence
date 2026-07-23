import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { pageRoutes } from "@/lib/navigation";
import { HomeHeroVisual } from "./HomeHeroVisual";

export function HomeHero() {
  return (
    <section className="hp-hero" aria-labelledby="hp-hero-title">
      <div className="hp-hero__atmosphere" aria-hidden="true">
        <div className="hp-hero__grid" />
        <div className="hp-hero__glow hp-hero__glow--a" />
        <div className="hp-hero__glow hp-hero__glow--b" />
      </div>

      <Container className="hp-hero__layout">
        <div className="hp-hero__copy">
          <p className="hp-kicker">
            <span>/</span> Softlligence Technologies
          </p>

          <h1 id="hp-hero-title" className="hp-hero__title">
            Software that transforms organizations.
          </h1>

          <p className="hp-hero__lead">
            We engineer enterprise platforms that replace spreadsheets, automate operations, and help
            organizations grow through technology — ERP, CRM, MES, AI, and custom systems built to
            scale.
          </p>

          <div className="hp-hero__actions">
            <Button href={pageRoutes.contact} size="lg" className="hp-magnetic max-sm:w-full">
              Book a Consultation
            </Button>
            <Button
              href={pageRoutes.work}
              variant="outline"
              size="lg"
              className="hp-magnetic max-sm:w-full"
            >
              Explore Our Work
            </Button>
          </div>

          <p className="hp-hero__positioning">We engineer software that powers businesses.</p>
        </div>

        <div className="hp-hero__visual">
          <HomeHeroVisual />
        </div>
      </Container>

      <a href="#trust" className="hp-scroll" aria-label="Scroll to trust and capabilities">
        <span />
        Scroll
      </a>
    </section>
  );
}
