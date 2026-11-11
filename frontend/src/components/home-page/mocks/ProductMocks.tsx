import "./mocks.css";

/**
 * Interface previews drawn in markup. Every value here is illustrative sample data;
 * each frame carries a visible "Sample data" tag so nothing reads as a customer metric.
 */

function Frame({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mock ${className}`} role="img" aria-label={`${title} interface preview with sample data`}>
      <div className="mock__chrome" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{title}</span>
        <em>Sample data</em>
      </div>
      <div className="mock__body" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

const bars = [38, 52, 44, 66, 58, 74, 62, 82, 70, 88, 76, 92];

export function ErpMock({ className }: { className?: string }) {
  return (
    <Frame title="Softlligence ERP · Operations" className={className}>
      <div className="mock__split">
        <ul className="mock__side">
          {["Overview", "Orders", "Inventory", "Finance", "Reports"].map((l, i) => (
            <li key={l} className={i === 0 ? "is-on" : undefined}>
              {l}
            </li>
          ))}
        </ul>
        <div className="mock__main">
          <div className="mock__kpis">
            <div>
              <small>Open orders</small>
              <strong>128</strong>
            </div>
            <div>
              <small>Low stock</small>
              <strong>14</strong>
            </div>
            <div>
              <small>Payables due</small>
              <strong>6</strong>
            </div>
          </div>
          <div className="mock__chart">
            {bars.map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} className={i === bars.length - 1 ? "is-hot" : undefined} />
            ))}
          </div>
          <table className="mock__table">
            <tbody>
              {[
                ["PO-2041", "Received", "ok"],
                ["PO-2042", "In transit", "wait"],
                ["PO-2043", "Needs approval", "hold"],
              ].map(([id, state, tone]) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <b className={`pill pill--${tone}`}>{state}</b>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Frame>
  );
}

export function CrmMock({ className }: { className?: string }) {
  const cols = [
    { name: "Lead", deals: ["Packaging line upgrade", "Warehouse scanners"] },
    { name: "Qualified", deals: ["Plant reporting rollout", "Dealer portal"] },
    { name: "Proposal", deals: ["Multi-branch ERP"] },
  ];
  return (
    <Frame title="Softlligence CRM · Pipeline" className={className}>
      <div className="mock__kanban">
        {cols.map((c) => (
          <div key={c.name} className="mock__col">
            <h4>
              {c.name}
              <span>{c.deals.length}</span>
            </h4>
            {c.deals.map((d) => (
              <div key={d} className="mock__deal">
                <b>{d}</b>
                <small>Owner assigned · follow-up set</small>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function MisMock({ className }: { className?: string }) {
  return (
    <Frame title="Softlligence MIS · Weekly view" className={className}>
      <div className="mock__mis">
        <svg viewBox="0 0 320 120" className="mock__line" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mis-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 92 L40 78 L80 84 L120 56 L160 62 L200 38 L240 46 L280 22 L320 30 V120 H0 Z" fill="url(#mis-fill)" />
          <path
            d="M0 92 L40 78 L80 84 L120 56 L160 62 L200 38 L240 46 L280 22 L320 30"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="mock__summary">
          <b>AI summary</b>
          <p>Purchasing is ahead of plan. Two product lines need a restock decision before month end.</p>
        </div>
      </div>
    </Frame>
  );
}

export function InventoryMock({ className }: { className?: string }) {
  const rows = [
    { sku: "Raw material A", level: 82 },
    { sku: "Component B", level: 46 },
    { sku: "Packaging C", level: 18 },
    { sku: "Finished goods D", level: 64 },
  ];
  return (
    <Frame title="Softlligence Inventory · Stock" className={className}>
      <div className="mock__stock">
        {rows.map((r) => (
          <div key={r.sku} className="mock__stockrow">
            <span>{r.sku}</span>
            <div className="mock__meter">
              <i style={{ width: `${r.level}%` }} className={r.level < 25 ? "is-low" : undefined} />
            </div>
            <small>{r.level}%</small>
          </div>
        ))}
        <div className="mock__rec">
          <b>Restock suggestion</b>
          <p>Packaging C is running low. Reorder is recommended.</p>
        </div>
      </div>
    </Frame>
  );
}

export function ProductMock({ slug, className }: { slug: string; className?: string }) {
  switch (slug) {
    case "crm":
      return <CrmMock className={className} />;
    case "mis":
      return <MisMock className={className} />;
    case "inventory":
      return <InventoryMock className={className} />;
    default:
      return <ErpMock className={className} />;
  }
}
