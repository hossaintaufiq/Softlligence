import { productsAiShared } from "@/lib/productsContent";

const capabilities = [
  {
    title: "Intelligence in the product",
    text: "A trained recommendation model suggests what to buy and restock, and AI-powered summaries turn your data into something a team can act on.",
  },
  {
    title: "Connected where you work",
    text: "Use the same system on the web, in a mobile app, inside WordPress, or through a Telegram chatbot, with integration into the stack you already run.",
  },
  {
    title: "Secure and fast from sprint one",
    text: "Access controls, encrypted data and performance budgets are planned at the start, not added at the end.",
  },
];

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Python",
  "FastAPI",
  "Laravel",
  "GraphQL",
  "React Native",
  "Flutter",
  "TensorFlow",
  "PyTorch",
  "OpenAI",
  "LangChain",
  "n8n",
];

export function HomeTech() {
  return (
    <section className="sec sec--soft" aria-labelledby="tech-title">
      <div className="wrap tech">
        <div data-reveal>
          <h2 id="tech-title" className="sec__title">
            Technology and innovation, built into the work
          </h2>
          <p className="sec__lead">{productsAiShared.label} features are part of every Softlligence product.</p>
          <ul className="tech__caps">
            {capabilities.map((c) => (
              <li key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="tech__stack" data-reveal style={{ "--rv-delay": "100ms" } as React.CSSProperties}>
          <h3 className="tech__stackhead">Our working stack</h3>
          <ul>
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
