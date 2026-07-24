import { Button } from "@/components/ui/Button";
import { aboutSignal, aboutStory } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";

export function AboutHero() {
  return (
    <section className="ap-hero" aria-labelledby="ap-hero-title">
      <div className="ap-hero__bg" aria-hidden="true">
        <div className="ap-hero__beam" />
        <div className="ap-hero__grid" />
      </div>

      <div className="ap-container ap-hero__inner">
        <p className="ap-kicker">
          <span>/</span> {aboutStory.eyebrow}
        </p>
        <h1 id="ap-hero-title">
          Softlligence builds software
          <br />
          <span>organizations actually run on.</span>
        </h1>
        <p className="ap-hero__lead">{aboutStory.lead}</p>

        <div className="ap-hero__actions">
          <Button href={pageRoutes.contact} size="lg" className="max-sm:w-full">
            Start a project
          </Button>
          <Button href={pageRoutes.team} variant="outline" size="lg" className="max-sm:w-full">
            Meet the team
          </Button>
        </div>

        <dl className="ap-hero__signals">
          {aboutSignal.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
