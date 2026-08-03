import { homeTechStack } from "@/lib/homePageContent";

const SI = "https://cdn.jsdelivr.net/npm/simple-icons@13/icons";

const iconByName = new Map(
  homeTechStack.map((t) => [t.name.toLowerCase(), t.icon] as const),
);

/** Name aliases used on service cards / enrichment copy. */
const aliases: Record<string, string> = {
  "github actions": "github",
  "aws cloudwatch": "aws",
  compose: "docker",
  "ci/cd": "github",
  monitoring: "sentry",
  pinecone: "langchain",
  rag: "openai",
  figjam: "figma",
  "headless cms": "next.js",
  docs: "git",
  "your stack": "typescript",
  grafana: `${SI}/grafana.svg`,
  datadog: `${SI}/datadog.svg`,
  mqtt: `${SI}/mqtt.svg`,
  cloudinary: `${SI}/cloudinary.svg`,
  storybook: `${SI}/storybook.svg`,
};

export function getTechIcon(name: string): string | undefined {
  const key = name.trim().toLowerCase();
  const direct = iconByName.get(key);
  if (direct) return direct;

  const alias = aliases[key];
  if (!alias) return undefined;
  if (alias.startsWith("http")) return alias;
  return iconByName.get(alias);
}
