import { productsAiShared } from "@/lib/productsContent";
import { SectionBg3D } from "./SectionBg3D";

const capabilities = [
  {
    title: "Decisions backed by your own data",
    text: "A trained model recommends what to buy and restock, and AI summaries turn raw records into something a manager can act on, which means less stock tied up and fewer surprises.",
  },
  {
    title: "One system, wherever your team works",
    text: "Web, mobile, WordPress or a Telegram chatbot all run on the same data, and plug into the tools you already pay for, so nobody re-keys anything.",
  },
  {
    title: "Risk handled before launch, not after",
    text: "Access controls, encrypted data and performance budgets are planned in sprint one, so growth never forces a rebuild or a security scramble.",
  },
];

/** Brand colours shown on hover; near-black brands fall back to the text colour so they stay visible in dark mode. */
const stack: { name: string; icon: string; color: string }[] = [
  { name: "TypeScript", icon: "typescript", color: "#3178c6" },
  { name: "React", icon: "react", color: "#61dafb" },
  { name: "Next.js", icon: "nextdotjs", color: "var(--text)" },
  { name: "Node.js", icon: "nodedotjs", color: "#5fa04e" },
  { name: "NestJS", icon: "nestjs", color: "#e0234e" },
  { name: "Python", icon: "python", color: "#4b8bbe" },
  { name: "FastAPI", icon: "fastapi", color: "#009688" },
  { name: "Laravel", icon: "laravel", color: "#ff2d20" },
  { name: "GraphQL", icon: "graphql", color: "#e10098" },
  { name: "React Native", icon: "react", color: "#61dafb" },
  { name: "Flutter", icon: "flutter", color: "#02a8ef" },
  { name: "TensorFlow", icon: "tensorflow", color: "#ff6f00" },
  { name: "PyTorch", icon: "pytorch", color: "#ee4c2c" },
  { name: "OpenAI", icon: "openai", color: "#10a37f" },
  { name: "LangChain", icon: "langchain", color: "var(--text)" },
  { name: "n8n", icon: "n8n", color: "#ea4b71" },
];

export function HomeTech() {
  return (
    <section className="sec sec--soft has-3d" aria-labelledby="tech-title">
      <SectionBg3D variant="network" />
      <div className="wrap tech">
        <div data-reveal>
          <h2 id="tech-title" className="sec__title">
            Technology picked for <em className="em">your costs</em>, not our résumé
          </h2>
          <p className="sec__lead">
            Every tool below earns its place by keeping your system fast, maintainable and affordable to run.{" "}
            {productsAiShared.label} features are part of every Softlligence product.
          </p>
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
          <h3 className="tech__stackhead">
            <span className="mono-label">Stack</span>
            Proven tools, chosen for your long-term cost
          </h3>
          <ul className="tech__logos">
            {stack.map((t) => (
              <li key={t.name} style={{ "--c": t.color } as React.CSSProperties}>
                <span
                  className="tech__ico"
                  aria-hidden="true"
                  style={{ maskImage: `url(/tech/${t.icon}.svg)`, WebkitMaskImage: `url(/tech/${t.icon}.svg)` }}
                />
                <span className="tech__name">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
