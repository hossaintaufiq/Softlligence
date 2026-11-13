const outcomes = [
  {
    n: "01",
    title: "Cut the manual work",
    from: "Spreadsheets, re-keyed orders and approvals chased over chat.",
    to: "Automated workflows with one entry point and a clear audit trail.",
  },
  {
    n: "02",
    title: "See the business live",
    from: "Month-end reports that describe a business that no longer exists.",
    to: "Live dashboards across sales, stock and finance, on one system of record.",
  },
  {
    n: "03",
    title: "Decide with confidence",
    from: "Gut-feel purchasing, stock-outs and over-ordering.",
    to: "AI recommendations and summaries grounded in your own data.",
  },
  {
    n: "04",
    title: "Grow without replatforming",
    from: "Tools that break at the next hire, branch or product line.",
    to: "Modular systems that extend as you do, backed by a team that stays.",
  },
];

export function HomeOutcomes() {
  return (
    <section className="sec outc" aria-labelledby="outcomes-title">
      <div className="wrap">
        <div className="sec__head" data-reveal>
          <p className="mono-label">What changes for your business</p>
          <h2 id="outcomes-title" className="sec__title">
            From daily friction to <em className="em">compounding</em> advantage
          </h2>
          <p className="sec__lead">
            We start from the business result you need, then choose the software that delivers it.
          </p>
        </div>

        <ol className="outc__list">
          {outcomes.map((o, i) => (
            <li
              key={o.n}
              className="outc__row"
              data-reveal
              style={{ "--rv-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <span className="outc__n" aria-hidden="true">
                {o.n}
              </span>
              <h3 className="outc__title">{o.title}</h3>
              <p className="outc__from">
                <span className="mono-label">Today</span>
                {o.from}
              </p>
              <p className="outc__to">
                <span className="mono-label mono-label--gold">With Softlligence</span>
                {o.to}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
