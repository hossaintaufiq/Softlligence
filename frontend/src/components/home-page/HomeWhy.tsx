import { whySoftlligence } from "@/lib/content";
import { PhotoFrame } from "@/components/ui/Photo";
import { SectionBg3D } from "./SectionBg3D";

export function HomeWhy() {
  return (
    <section className="sec has-3d" aria-labelledby="why-title">
      <SectionBg3D variant="lattice" />
      <div className="wrap why">
        <div className="why__lead" data-reveal>
          <h2 id="why-title" className="sec__title">
            Why teams <em className="em">choose</em> Softlligence
          </h2>
          <p className="sec__lead">
            Serious software needs a partner who stays accountable after launch. That is how we work.
          </p>
          <PhotoFrame
            src="/images/server-racks.jpg"
            alt="Rows of server racks with glowing status lights"
            caption="Production-grade infrastructure"
            ratio="4 / 3"
          />
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
