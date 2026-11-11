import { Counter } from "@/components/ui/Counter";
import { homeTrustStats } from "@/lib/homePageContent";

const shown = homeTrustStats.slice(0, 4);

export function HomeStats() {
  return (
    <section className="stats" aria-label="Softlligence at a glance">
      <div className="wrap">
        <dl className="stats__row" data-reveal>
          {shown.map((s) => (
            <div key={s.label} className="stats__item">
              <dd className="stats__num">
                <Counter value={s.count} suffix={s.suffix} />
              </dd>
              <dt className="stats__label">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
