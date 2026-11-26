import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { processSteps } from "@/lib/content";
import { homeProcessSummaries, homeWhyPoints } from "@/lib/homePageContent";
import { pageRoutes } from "@/lib/navigation";

export function HomeWhy() {
  return (
    <section className="sec" aria-labelledby="why-title">
      <div className="wrap why">
        <div className="why__lead" data-reveal>
          <h2 id="why-title" className="sec__title">
            Why teams <em className="em">choose</em> Softlligence
          </h2>
          <p className="sec__lead">
            Serious software needs a partner who stays accountable after launch. That is how we work.
          </p>

          <div className="why__process">
            <h3 id="why-process-title">How a project runs</h3>
            <ol aria-labelledby="why-process-title">
              {processSteps.map((step) => (
                <li key={step.title}>
                  <p className="why__step">
                    <b>{step.title}</b>
                    <span>{step.duration}</span>
                  </p>
                  <p>{homeProcessSummaries[step.title]}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div>
          <ul className="why__list">
            {homeWhyPoints.map((point, i) => (
              <li key={point.title} data-reveal style={{ "--rv-delay": `${i * 50}ms` } as React.CSSProperties}>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
                <p className="why__proof">
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  <span>
                    <span className="sr-only">What you get: </span>
                    {point.proof}
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <div className="why__actions" data-reveal>
            <Link href={pageRoutes.contact} className="btn btn--primary btn--lg">
              Request a discovery call
              <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
            </Link>
            <Link href={pageRoutes.process} className="link-arrow">
              See our full process
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
