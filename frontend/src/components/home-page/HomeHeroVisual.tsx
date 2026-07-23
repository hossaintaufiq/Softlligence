/** Lightweight enterprise ERP / ops dashboard visual — CSS + SVG only. */
export function HomeHeroVisual() {
  return (
    <div className="hp-visual" aria-hidden="true">
      <div className="hp-visual__glow" />
      <div className="hp-visual__frame">
        <header className="hp-visual__bar">
          <span className="hp-visual__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="hp-visual__title">Softlligence · Enterprise Ops</span>
          <span className="hp-visual__live">LIVE</span>
        </header>

        <div className="hp-visual__body">
          <aside className="hp-visual__nav">
            {["ERP", "CRM", "MES", "AI", "BI"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </aside>

          <div className="hp-visual__main">
            <div className="hp-visual__metrics">
              {[
                { l: "Orders", v: "2,418", u: "+12%" },
                { l: "Inventory", v: "98.2%", u: "OK" },
                { l: "Throughput", v: "1.4k", u: "/hr" },
              ].map((m) => (
                <div key={m.l} className="hp-visual__metric">
                  <em>{m.l}</em>
                  <strong>{m.v}</strong>
                  <span>{m.u}</span>
                </div>
              ))}
            </div>

            <div className="hp-visual__chart">
              <svg viewBox="0 0 320 120" className="hp-visual__svg" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="hp-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--theme-accent)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--theme-accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  className="hp-visual__area"
                  d="M0 90 C40 80, 60 40, 100 55 S160 20, 200 45 S260 70, 320 30 L320 120 L0 120 Z"
                  fill="url(#hp-chart-fill)"
                />
                <path
                  className="hp-visual__line"
                  d="M0 90 C40 80, 60 40, 100 55 S160 20, 200 45 S260 70, 320 30"
                  fill="none"
                  stroke="var(--theme-accent)"
                  strokeWidth="2.2"
                />
              </svg>
              <div className="hp-visual__scan" />
            </div>

            <div className="hp-visual__nodes">
              {[
                { t: "Finance", s: "Synced" },
                { t: "Warehouse", s: "Active" },
                { t: "Production", s: "Running" },
                { t: "AI Layer", s: "Online" },
              ].map((n) => (
                <div key={n.t} className="hp-visual__node">
                  <span className="hp-visual__pulse" />
                  <div>
                    <strong>{n.t}</strong>
                    <em>{n.s}</em>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
