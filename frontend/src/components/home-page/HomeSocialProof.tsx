import Image from "next/image";
import { Container } from "@/components/ui/Section";

const COLS = 12;
const ROWS = 5;

/** Online portraits for the mosaic (Unsplash). */
const portraits = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=70",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=70",
];

type Form = "circle" | "square" | "leaf-tr" | "leaf-tl" | "leaf-br" | "leaf-bl" | "soft";
type Tone = "blue" | "mist" | "ink" | "gold";

type Cell =
  | { kind: "empty" }
  | { kind: "shape"; tone: Tone; form: Form }
  | { kind: "photo"; src: string; form: Form };

/**
 * Curated 12×5 mosaic. Top-left & top-right corners stay empty.
 * Pattern mirrors the reference: mixed leaves, circles, squares + portraits.
 */
function buildMosaic(): Cell[] {
  const pattern: Array<"e" | "s" | "p"> = [];
  // Row templates (12 cols). e=empty, s=shape, p=photo
  const rows = [
    "e s p s p s s p s p s e", // top corners empty
    "p s p s s p s p s s p s",
    "s p s p s s p s p s p s",
    "p s s p s p s s p s p s",
    "s p s s p s p s p s s p",
  ];

  const forms: Form[] = ["circle", "square", "leaf-tr", "leaf-tl", "leaf-br", "leaf-bl", "soft"];
  const tones: Tone[] = ["blue", "mist", "ink", "mist", "blue", "gold", "mist", "blue"];

  let shapeN = 0;
  let photoN = 0;
  const cells: Cell[] = [];

  for (const row of rows) {
    for (const token of row.split(" ")) {
      if (token === "e") {
        cells.push({ kind: "empty" });
      } else if (token === "p") {
        cells.push({
          kind: "photo",
          src: portraits[photoN % portraits.length],
          form: forms[photoN % forms.length],
        });
        photoN += 1;
      } else {
        cells.push({
          kind: "shape",
          tone: tones[shapeN % tones.length],
          form: forms[(shapeN + 2) % forms.length],
        });
        shapeN += 1;
      }
    }
  }

  return cells;
}

const mosaic = buildMosaic();

export function HomeSocialProof() {
  return (
    <section className="hp-section hp-social" aria-labelledby="hp-social-title">
      <Container className="hp-social__inner">
        <div className="hp-social__mosaic">
          <div
            className="hp-social__grid"
            style={{ ["--hp-social-cols" as string]: COLS, ["--hp-social-rows" as string]: ROWS }}
            aria-hidden="true"
          >
            {mosaic.map((cell, i) => {
              if (cell.kind === "empty") {
                return <div key={i} className="hp-social__cell hp-social__cell--empty" />;
              }
              if (cell.kind === "photo") {
                return (
                  <div
                    key={i}
                    className={`hp-social__cell hp-social__cell--photo hp-social__cell--${cell.form}`}
                  >
                    <Image
                      src={cell.src}
                      alt=""
                      width={120}
                      height={120}
                      className="hp-social__face"
                    />
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  className={`hp-social__cell hp-social__cell--${cell.tone} hp-social__cell--${cell.form}`}
                />
              );
            })}
          </div>

          <div className="hp-social__pill">
            <p id="hp-social-title" className="hp-social__headline">
              Join teams that{" "}
              <span className="hp-social__mark">
                <em className="hp-social__scribble">growing</em>
                <svg className="hp-social__arrow" viewBox="0 0 36 24" aria-hidden="true">
                  <path
                    d="M6 3c8 1 16 5 22 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 14l7 6-.5-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                ship
              </span>{" "}
              with Softlligence
            </p>
            <p className="hp-social__sub">Enterprise software organizations actually run on.</p>
          </div>
        </div>

        <article className="hp-social__quote">
          <div className="hp-social__quote-body">
            <span className="hp-social__quotemark" aria-hidden="true">
              “
            </span>
            <p>
              Manual approvals that used to take days now clear in hours. Our team finally spends
              time on decisions — not chasing paperwork across disconnected tools.
            </p>
          </div>
          <aside className="hp-social__attribution">
            <div className="hp-social__avatar">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=70"
                alt=""
                width={72}
                height={72}
                className="hp-social__avatar-img"
              />
            </div>
            <p className="hp-social__person">
              <strong>Operations Partner</strong>
              <span>Manufacturing · Softlligence client</span>
            </p>
            <div className="hp-social__brand" aria-hidden="true">
              Softlligence
            </div>
          </aside>
        </article>
      </Container>
    </section>
  );
}
