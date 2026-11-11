import { whySoftlligence } from "@/lib/content";

export function HomeWhy() {
  return (
    <section className="sec" aria-labelledby="why-title">
      <div className="wrap why">
        <div className="why__lead" data-reveal>
          <h2 id="why-title" className="sec__title">
            Why teams choose Softlligence
          </h2>
          <p className="sec__lead">
            Serious software needs a partner who stays accountable after launch. That is how we work.
          </p>
        </div>
        <ol className="why__list">
          {whySoftlligence.map((w, i) => (
            <li key={w.title} data-reveal style={{ "--rv-delay": `${i * 70}ms` } as React.CSSProperties}>
              <h3>{w.title}</h3>
              <p>{w.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
