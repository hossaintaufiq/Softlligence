import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Building2,
  Cog,
  Factory,
  Smartphone,
  UserCog,
  Users,
  Warehouse,
} from "lucide-react";
import { homeWhatWeBuild } from "@/lib/homePageContent";
import { pageRoutes } from "@/lib/navigation";
import { products } from "@/lib/productsContent";

const icons = {
  erp: Building2,
  crm: Users,
  mes: Factory,
  inventory: Warehouse,
  manufacturing: Cog,
  hrms: UserCog,
  "ai-automation": Bot,
  bi: BarChart3,
  mobile: Smartphone,
} as const;

type Id = keyof typeof icons;

function item(id: string) {
  return homeWhatWeBuild.find((i) => i.id === id);
}

export function HomeSolutions() {
  const erp = item("erp");
  const erpModules = products.find((p) => p.slug === "erp")?.modules.slice(0, 4) ?? [];
  const small: Id[] = ["mes", "crm"];
  const row: Id[] = ["inventory", "manufacturing", "hrms"];
  const web = item("web");
  const mobile = item("mobile");
  const ai = item("ai-automation");
  const bi = item("bi");

  return (
    <section className="sec" id="solutions" aria-labelledby="solutions-title">
      <div className="wrap">
        <div className="sec__head sec__head--split" data-reveal>
          <h2 id="solutions-title" className="sec__title">
            Enterprise solutions, shaped around <em className="em">how you operate</em>
          </h2>
          <p className="sec__lead">
            Beyond the packaged suite, we design and build the systems that run plants, warehouses, sales
            teams and back offices.
          </p>
        </div>

        <div className="bento">
          {erp && (
            <article className="bento__tile bento__tile--feature" data-reveal>
              <Building2 size={26} aria-hidden="true" className="bento__icon" />
              <h3>{erp.title}</h3>
              <p>{erp.description}</p>
              <ul className="bento__modules" aria-label="ERP modules">
                {erpModules.map((m) => (
                  <li key={m.title}>{m.title}</li>
                ))}
              </ul>
              <Link href={`${pageRoutes.products}/erp`} className="link-arrow">
                See the ERP product
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          )}

          {small.map((id, n) => {
            const it = item(id);
            if (!it) return null;
            const Icon = icons[id];
            return (
              <article
                key={id}
                className="bento__tile bento__tile--half"
                data-reveal
                style={{ "--rv-delay": `${(n + 1) * 70}ms` } as React.CSSProperties}
              >
                <Icon size={24} aria-hidden="true" className="bento__icon" />
                <h3>{it.title}</h3>
                <p>{it.description}</p>
              </article>
            );
          })}

          {row.map((id, n) => {
            const it = item(id);
            if (!it) return null;
            const Icon = icons[id];
            return (
              <article
                key={id}
                className="bento__tile bento__tile--third"
                data-reveal
                style={{ "--rv-delay": `${n * 70}ms` } as React.CSSProperties}
              >
                <Icon size={24} aria-hidden="true" className="bento__icon" />
                <h3>{it.title}</h3>
                <p>{it.description}</p>
              </article>
            );
          })}

          {ai && (
            <article className="bento__tile bento__tile--ai" data-reveal>
              <Bot size={26} aria-hidden="true" className="bento__icon" />
              <h3>{ai.title}</h3>
              <p>{ai.description}</p>
            </article>
          )}

          {bi && (
            <article className="bento__tile bento__tile--bi" data-reveal style={{ "--rv-delay": "70ms" } as React.CSSProperties}>
              <BarChart3 size={24} aria-hidden="true" className="bento__icon" />
              <h3>{bi.title}</h3>
              <p>{bi.description}</p>
            </article>
          )}

          {web && mobile && (
            <article className="bento__tile bento__tile--wide" data-reveal>
              <div>
                <h3>{web.title} and mobile apps</h3>
                <p>
                  {web.description} {mobile.description}
                </p>
              </div>
              <Link href={pageRoutes.services} className="btn btn--ghost">
                Explore services
              </Link>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
