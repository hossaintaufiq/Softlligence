"use client";

import { Button } from "@/components/ui/Button";
import { pageRoutes } from "@/lib/navigation";
import { processSteps } from "@/lib/content";

export function ProcessHero() {
  return (
    <section className="pp-hero" aria-labelledby="pp-hero-title">
      <div className="pp-hero__bg" aria-hidden="true">
        <div className="pp-hero__grid" />
        <div className="pp-hero__glow" />
      </div>

      <div className="pp-container pp-hero__layout">
        <div className="pp-hero__copy">
          <p className="pp-kicker">
            <span>/</span> How a project runs
          </p>
          <h1 id="pp-hero-title">
            Five stages.
            <br />
            Clear gates.
            <br />
            <em>Visible progress.</em>
          </h1>
          <p className="pp-hero__lead">
            A predictable path from discovery to growth — with signed-off deliverables at every step,
            so you always know what&apos;s next and who&apos;s accountable.
          </p>
          <div className="pp-hero__actions">
            <Button href={pageRoutes.contact} size="lg" className="max-sm:w-full">
              Start discovery
            </Button>
            <Button href={pageRoutes.work} variant="outline" size="lg" className="max-sm:w-full">
              See our work
            </Button>
          </div>
        </div>

        <aside className="pp-hero__gates" aria-label="Delivery stages overview">
          <p className="pp-hero__gates-label">Delivery gates</p>
          <ol>
            {processSteps.map((step) => (
              <li key={step.num}>
                <span>{step.num}</span>
                <div>
                  <strong>{step.title}</strong>
                  <em>{step.duration}</em>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
