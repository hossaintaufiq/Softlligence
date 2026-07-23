import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { homeProblems } from "@/lib/homePageContent";

export function HomeProblems() {
  return (
    <section className="hp-section hp-problems" aria-labelledby="hp-problems-title">
      <Container>
        <header className="hp-problems__intro">
          <Eyebrow number="03">PROBLEMS</Eyebrow>
          <SectionTitle>
            <span id="hp-problems-title">Companies struggle with the same friction.</span>
          </SectionTitle>
          <p className="hp-lead">
            Manual processes and fragmented tools quietly tax every department — until operations
            can&apos;t scale.
          </p>
        </header>

        <ul className="hp-problems__list">
          {homeProblems.map((item, i) => (
            <li key={item.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="hp-problems__resolve">
          <p className="hp-kicker">
            <span>/</span> The Softlligence response
          </p>
          <h3>We solve these.</h3>
          <p>
            We replace disconnected tools with engineered platforms — unified data, automated
            workflows, and real-time visibility leadership can trust.
          </p>
        </div>
      </Container>
    </section>
  );
}
