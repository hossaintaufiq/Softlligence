import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clientProjects } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";

const ids = ["mango-ev", "playpen-school", "acumens-media"] as const;

export function HomeWork() {
  const projects = ids
    .map((id) => clientProjects.find((p) => p.id === id))
    .filter((p): p is (typeof clientProjects)[number] => Boolean(p));
  const [lead, ...rest] = projects;

  return (
    <section className="sec" aria-labelledby="work-title">
      <div className="wrap">
        <div className="sec__head sec__head--split" data-reveal>
          <h2 id="work-title" className="sec__title">
            Selected <em className="em">projects</em>
          </h2>
          <Link href={pageRoutes.work} className="link-arrow">
            See all case studies
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="hwork">
          {lead && (
            <article className="hwork__lead" data-reveal>
              <p className="hwork__meta">
                {lead.sector} · {lead.type}
              </p>
              <h3>{lead.title}</h3>
              <p className="hwork__headline">{lead.headline}</p>
              <ul className="hwork__stats">
                {lead.stats.map((s) => (
                  <li key={s.label}>
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
              <Link href={pageRoutes.work} className="btn btn--light">
                Read the case study
              </Link>
            </article>
          )}

          <div className="hwork__side">
            {rest.map((p, i) => (
              <article
                key={p.id}
                className="hwork__item"
                data-reveal
                style={{ "--rv-delay": `${(i + 1) * 80}ms` } as React.CSSProperties}
              >
                <p className="hwork__meta">
                  {p.sector} · {p.type}
                </p>
                <h3>{p.title}</h3>
                <p>{p.headline}</p>
                <Link href={pageRoutes.work} className="link-arrow">
                  View project
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
