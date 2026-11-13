import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HomeFinalCta } from "@/components/home-page/HomeFinalCta";
import { teamEngineering, teamExpertise, teamLeadership, teamWorkflow, values } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import "@/components/products-page/products.css";
import "@/components/pages/pages.css";
import { SectionBg3D } from "@/components/home-page/SectionBg3D";

type Person = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  photo?: string | null;
};

function href(url?: string) {
  if (!url) return undefined;
  return /^https?:\/\//.test(url) ? url : `https://${url}`;
}

function PersonRow({ p }: { p: Person }) {
  const linkedin = href(p.linkedin);
  const github = href(p.github);
  return (
    <li className="tm-person" data-reveal>
      <div className="tm-person__photo">
        {p.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.photo} alt={`Portrait of ${p.name}`} width={160} height={160} loading="lazy" />
        ) : (
          <span aria-hidden="true">{p.initials}</span>
        )}
      </div>
      <div className="tm-person__body">
        <h3>{p.name}</h3>
        <p className="tm-person__role">{p.role}</p>
        <p className="tm-person__bio">{p.bio}</p>
        <ul className="pdp-chips tm-skills" aria-label={`${p.name} skills`}>
          {p.skills
            .filter((s, i, a) => a.indexOf(s) === i)
            .slice(0, 7)
            .map((s) => (
              <li key={s}>{s}</li>
            ))}
        </ul>
        {(linkedin || github) && (
          <ul className="tm-links">
            {linkedin && (
              <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  LinkedIn
                  <span className="sr-only"> profile of {p.name} (opens in a new tab)</span>
                </a>
              </li>
            )}
            {github && (
              <li>
                <a href={github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  GitHub
                  <span className="sr-only"> profile of {p.name} (opens in a new tab)</span>
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </li>
  );
}

export function TeamDetail() {
  return (
    <div className="pdp">
      <ScrollReveal />

      <section className="pdp-hero" aria-labelledby="team-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <SectionBg3D variant="lattice" />
        <div className="wrap">
          <h1 id="team-title" className="pdp-title enter">
            The people engineering modern digital systems.
          </h1>
          <p className="pdp-lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
            Softlligence is led by engineers who still ship: architecture, interfaces and delivery
            standards you can trust with enterprise workloads.
          </p>
          <div className="pdp-actions enter" style={{ "--d": "180ms" } as React.CSSProperties}>
            <Link href={pageRoutes.contact} className="btn btn--primary btn--lg">
              Talk to the team
              <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="lead-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="lead-title" className="sec__title">
              Leadership
            </h2>
          </div>
          <ul className="tm-grid">
            {teamLeadership.map((p) => (
              <PersonRow key={p.name} p={p as Person} />
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec--soft" aria-labelledby="eng-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="eng-title" className="sec__title">
              Engineering
            </h2>
          </div>
          <ul className="tm-grid">
            {teamEngineering.map((p) => (
              <PersonRow key={p.name} p={p as Person} />
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="exp-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="exp-title" className="sec__title">
              What the team covers
            </h2>
          </div>
          <ul className="pg-pairs pg-pairs--tight">
            {teamExpertise.map((e, i) => (
              <li key={e.title} data-reveal style={{ "--rv-delay": `${(i % 2) * 60}ms` } as React.CSSProperties}>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec--soft" aria-labelledby="flow-title">
        <div className="wrap pdp-split">
          <div data-reveal>
            <h2 id="flow-title" className="sec__title">
              How the team works
            </h2>
            <ol className="pdp-chips tm-flow" aria-label="Workflow">
              {teamWorkflow.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
          <ul className="pdp-ways tm-values" data-reveal style={{ "--rv-delay": "80ms" } as React.CSSProperties}>
            {values.map((v) => (
              <li key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HomeFinalCta />
    </div>
  );
}
