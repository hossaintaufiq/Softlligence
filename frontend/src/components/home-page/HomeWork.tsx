import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ShowroomStage } from "@/components/tools-page/ShowroomStage";
import { clientProjects } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { getProduct } from "@/lib/productsContent";
import { tools } from "@/lib/toolsContent";

type Card = {
  id: string;
  meta: string;
  title: string;
  headline: string;
  link: { href: string; label: string };
};

const showroom = tools.find((t) => t.slug === "showroom");
const inventory = getProduct("inventory");

/** The large card: a 360° car preview. The Kia site is our Showroom platform, so it links to its live demo. */
const lead = {
  meta: "Automotive · Website platform",
  title: "Kia Bangladesh",
  headline: "A car website with a real-time 3D showroom, where buyers spin the car and try paint colours",
  link: showroom?.liveUrl
    ? { href: showroom.liveUrl, label: "Open live demo" }
    : { href: `${pageRoutes.tools}#showroom`, label: "About Showroom" },
};

function caseStudy(id: string): Card[] {
  const p = clientProjects.find((project) => project.id === id);
  if (!p) return [];
  return [
    {
      id: p.id,
      meta: `${p.sector} · ${p.type}`,
      title: p.title,
      headline: p.headline,
      link: { href: pageRoutes.work, label: "View project" },
    },
  ];
}

const side: Card[] = [
  ...(inventory
    ? [
        {
          id: inventory.slug,
          meta: "Operations · Software product",
          title: "Inventory Management Software",
          headline: inventory.tagline,
          link: { href: `${pageRoutes.products}/${inventory.slug}`, label: "View product" },
        },
      ]
    : []),
  ...caseStudy("playpen-school"),
  ...caseStudy("acumens-media"),
];

export function HomeWork() {
  const external = lead.link.href.startsWith("http");

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
          <article className="hwork__lead" data-reveal>
            <p className="hwork__meta">{lead.meta}</p>
            <h3>{lead.title}</h3>
            <p className="hwork__headline">{lead.headline}</p>
            <ShowroomStage stageOnly />
            <Link
              href={lead.link.href}
              className="btn btn--light"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {lead.link.label}
            </Link>
          </article>

          <div className="hwork__side">
            {side.map((card, i) => (
              <article
                key={card.id}
                className="hwork__item"
                data-reveal
                style={{ "--rv-delay": `${(i + 1) * 80}ms` } as React.CSSProperties}
              >
                <p className="hwork__meta">{card.meta}</p>
                <h3>{card.title}</h3>
                <p>{card.headline}</p>
                <Link href={card.link.href} className="link-arrow">
                  {card.link.label}
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
