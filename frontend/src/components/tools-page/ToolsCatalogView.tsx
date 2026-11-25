import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HomeFinalCta } from "@/components/home-page/HomeFinalCta";
import { pageRoutes } from "@/lib/navigation";
import { toolPlans, tools, toolsIntro, type ToolSlug } from "@/lib/toolsContent";
import "@/components/home-page/mocks/mocks.css";
import "@/components/products-page/products.css";
import { ShowroomStage } from "./ShowroomStage";
import "./tools.css";

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mock" role="img" aria-label={`${title} interface preview with sample data`}>
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

function CleanmetaMock() {
  return (
    <Frame title="Cleanmeta · Inspect and clean">
      <div className="tmock-file">
        <span className="tmock-file__thumb" />
        <div>
          <b>IMG_2048.jpg</b>
          <small>JPEG · 4.2 MB · processed locally</small>
        </div>
      </div>
      <table className="mock__table tmock-meta">
        <tbody>
          {[
            ["Camera & hardware EXIF", "Found", "wait"],
            ["GPS location", "Found", "hold"],
            ["AI provenance & prompts", "Detected", "hold"],
            ["C2PA Content Credentials", "Present", "wait"],
          ].map(([label, state, tone]) => (
            <tr key={label}>
              <td>{label}</td>
              <td>
                <b className={`pill pill--${tone}`}>{state}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tmock-done">
        <b className="pill pill--ok">All metadata removed</b>
        <span>Download cleaned image</span>
      </div>
    </Frame>
  );
}

const wave = [22, 48, 70, 40, 86, 58, 30, 64, 92, 52, 36, 74, 60, 28, 50, 80, 44, 66, 34, 56, 78, 38, 24, 46];

function VoiceMock() {
  return (
    <Frame title="Softlligence Voice · Studio">
      <div className="tmock-voice">
        <span className="tmock-voice__avatar" />
        <div>
          <b>Brand voice · Warm</b>
          <small>Cloned from a 60-second sample</small>
        </div>
        <b className="pill pill--ok">Ready</b>
      </div>
      <p className="tmock-script">“Thanks for calling. Your order has shipped and will arrive tomorrow.”</p>
      <div className="tmock-wave">
        {wave.map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} className={i < 14 ? "is-hot" : undefined} />
        ))}
      </div>
      <div className="tmock-owner">
        {["Website", "IVR", "Chatbot", "API"].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </Frame>
  );
}

const mocks: Record<ToolSlug, () => React.ReactElement> = {
  showroom: ShowroomStage,
  cleanmeta: CleanmetaMock,
  voice: VoiceMock,
};

export function ToolsCatalogView() {
  return (
    <div className="pdp">
      <ScrollReveal />

      <section className="pdp-hero" aria-labelledby="tools-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <div className="wrap pdp-hero__inner">
          <h1 id="tools-title" className="pdp-title enter">
            {toolsIntro.title}
          </h1>
          <p className="pdp-lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
            {toolsIntro.lead}
          </p>
          <div className="pdp-actions enter" style={{ "--d": "180ms" } as React.CSSProperties}>
            <a href="#tools" className="btn btn--primary btn--lg">
              Browse tools
              <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
            </a>
            <a href="#plans" className="btn btn--ghost btn--lg">
              License or subscribe
            </a>
          </div>
        </div>
      </section>

      <section id="tools" className="pdp-catalog" aria-label="Softlligence tools">
        <div className="wrap">
          {tools.map((t, i) => {
            const Mock = mocks[t.slug];
            return (
              <article key={t.slug} id={t.slug} className="pdp-row tool-row" data-reveal>
                <div className="pdp-row__stage">
                  <Mock />
                </div>
                <div className="pdp-row__text">
                  <p className="tool-kind">{t.kind}</p>
                  <h2>{t.name}</h2>
                  <p className="pdp-row__tag">{t.tagline}</p>
                  <p className="pdp-row__sum">{t.summary}</p>
                  <ul className="pdp-checks">
                    {t.features.map((f) => (
                      <li key={f}>
                        <Check size={16} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="tool-audience">
                    <span>Built for</span> {t.audience}
                  </p>
                  <div className="pdp-row__actions">
                    {t.liveUrl ? (
                      <a href={t.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                        {t.liveLabel ?? "Open live demo"}
                        <ArrowRight size={17} className="btn__arrow" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <Link href={pageRoutes.contact} className="btn btn--primary">
                        Request a demo
                        <ArrowRight size={17} className="btn__arrow" aria-hidden="true" />
                      </Link>
                    )}
                    <Link href={pageRoutes.contact} className="link-arrow">
                      Get pricing
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                  <span className="sr-only">
                    Tool {i + 1} of {tools.length}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="plans" className="sec sec--soft" aria-labelledby="plans-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="plans-title" className="sec__title">
              Buy it once or subscribe monthly
            </h2>
            <p className="sec__lead">
              Every tool is available as a license or a monthly subscription. Tell us which tool and how you plan
              to use it, and we will send a quote within one business day.
            </p>
          </div>
          <ul className="pdp-ways">
            {toolPlans.map((p, i) => (
              <li key={p.title} data-reveal style={{ "--rv-delay": `${i * 70}ms` } as React.CSSProperties}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
          <div className="tool-plans__cta" data-reveal>
            <Link href={pageRoutes.contact} className="btn btn--primary btn--lg">
              Ask for pricing
              <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <HomeFinalCta />
    </div>
  );
}
