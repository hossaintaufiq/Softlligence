import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/content";
import { homeExtraIndustries } from "@/lib/homePageContent";
import { pageRoutes } from "@/lib/navigation";
import { BandPhoto } from "@/components/ui/Photo";
import { SectionBg3D } from "./SectionBg3D";

export function HomeIndustries() {
  const rows = [
    ...homeExtraIndustries.map((i) => ({ id: i.id, title: i.title, tag: i.tag })),
    ...industries.map((i) => ({ id: i.id, title: i.title, tag: i.tag })),
  ];

  return (
    <section className="sec sec--band has-3d" id="industries" aria-labelledby="industries-title">
      <BandPhoto src="/images/earth-night.jpg" position="center 40%" />
      <SectionBg3D variant="contour" tone="dark" />
      <div className="wrap ind">
        <div className="ind__head" data-reveal>
          <h2 id="industries-title" className="sec__title">
            Built for the industries that <em className="em">keep things moving</em>
          </h2>
          <p className="sec__lead">
            From the shop floor to the front desk, we start with how your sector actually works.
          </p>
          <Link href={pageRoutes.industries} className="btn btn--outline-light">
            Explore industries
          </Link>
        </div>

        <ul className="ind__list">
          {rows.map((r, i) => (
            <li key={r.id} data-reveal style={{ "--rv-delay": `${Math.min(i, 6) * 40}ms` } as React.CSSProperties}>
              <Link href={pageRoutes.industries} className="ind__row">
                <span className="ind__title">{r.title}</span>
                <span className="ind__tag">{r.tag}</span>
                <ArrowUpRight size={20} aria-hidden="true" className="ind__arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
