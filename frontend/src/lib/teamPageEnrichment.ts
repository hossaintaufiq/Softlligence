/** Display-only enrichment for /team — does not alter member records in content.ts */

export const teamCulturePoints = [
  {
    title: "Close client collaboration",
    description: "Direct access to the builders on your project — not a rotating account layer.",
  },
  {
    title: "Engineering excellence",
    description: "Clean architecture, tested releases, and code your team can maintain after handoff.",
  },
  {
    title: "Scalable systems",
    description: "Products designed for growth in users, data, and integrations from day one.",
  },
  {
    title: "Long-term partnerships",
    description: "Launch is a milestone — we stay for support, iteration, and the next chapter.",
  },
];

export const teamValues = [
  { title: "Engineering Excellence", description: "Quality in architecture, code, and delivery rhythm." },
  { title: "Transparency", description: "Clear progress, honest timelines, visible decisions." },
  { title: "Long-Term Partnership", description: "Relationships built past the first release." },
  { title: "Security First", description: "Access, secrets, and auditability treated as product work." },
  { title: "Scalable Architecture", description: "Systems that absorb growth without rewrites." },
  { title: "Continuous Learning", description: "Modern practices applied where they earn their keep." },
  { title: "Innovation", description: "Practical AI and tooling that improve real workflows." },
  { title: "Problem Solving", description: "Business outcomes first — technology second." },
];

export const teamWhyClients = [
  { title: "Dedicated project teams", description: "Named engineers who stay on the work end to end." },
  { title: "Direct communication", description: "You talk to the people writing the code." },
  { title: "Modern technologies", description: "Stacks chosen for maintainability and speed-to-value." },
  { title: "Long-term support", description: "Monitoring, fixes, and roadmap continuity after launch." },
  { title: "Custom solutions", description: "Built around your workflows — not forced into templates." },
  { title: "Business-first thinking", description: "Features mapped to operational outcomes." },
  { title: "Enterprise quality", description: "Security, roles, and reliability as default." },
];

export const teamTechStack = [
  "Next.js",
  "React",
  "Node.js",
  "NestJS",
  "TypeScript",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Azure",
  "OpenAI",
  "TensorFlow",
  "React Native",
  "Flutter",
  "Tailwind CSS",
  "Prisma",
];

export const teamProcessSteps = [
  "Discovery",
  "Business Analysis",
  "System Design",
  "UI/UX",
  "Development",
  "Testing",
  "Deployment",
  "Maintenance",
];

export const teamCapabilityExtras: Record<string, string[]> = {
  "Frontend Development": ["React", "Next.js", "TypeScript"],
  "Backend Development": ["Node.js", "NestJS", "APIs"],
  "Full Stack Development": ["End-to-end delivery", "PostgreSQL"],
  "Mobile Development": ["React Native", "Flutter"],
  "AI Solutions": ["OpenAI", "RAG", "Python"],
  "Cloud Infrastructure": ["AWS", "Azure", "Docker"],
  "DevOps": ["CI/CD", "Monitoring"],
  "UI/UX Design": ["Figma", "Design systems"],
  "Database Architecture": ["PostgreSQL", "MongoDB", "Prisma"],
  "API Development": ["REST", "Auth", "Contracts"],
  "Project Management": ["Sprints", "Demos", "Roadmaps"],
  "Quality Assurance": ["Automated checks", "Release QA"],
};
