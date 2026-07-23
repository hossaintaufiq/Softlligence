/** Display-only enrichment for the homepage — does not alter shared content.ts records. */

export const homeTrustStats = [
  { count: 12, suffix: "+", label: "Projects Delivered" },
  { count: 6, suffix: "+", label: "Industries Served" },
  { count: 10, suffix: "+", label: "Enterprise Solutions" },
  { count: 7, suffix: "+", label: "Engineers" },
  { count: 3, suffix: "+", label: "Years of Experience" },
  { count: 8, suffix: "+", label: "Supported Platforms" },
];

export const homeWhatWeBuild = [
  {
    id: "erp",
    title: "Enterprise ERP",
    description: "Unified finance, inventory, procurement, and operations in one system of record.",
  },
  {
    id: "crm",
    title: "CRM Platforms",
    description: "Pipeline, customer history, and service workflows built around how your team sells.",
  },
  {
    id: "mes",
    title: "MES Systems",
    description: "Shop-floor visibility — production orders, machine status, and quality checkpoints.",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Real-time stock, warehouses, and transfer flows that replace spreadsheet guesswork.",
  },
  {
    id: "manufacturing",
    title: "Manufacturing Software",
    description: "Planning, BOM, and production tracking tailored to your plant—not generic templates.",
  },
  {
    id: "hrms",
    title: "HRMS",
    description: "People ops: attendance, payroll inputs, leave, and employee self-service portals.",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Document intelligence, classification, and workflow automation grounded in your data.",
  },
  {
    id: "bi",
    title: "Business Intelligence",
    description: "Live dashboards and reporting so leadership sees the business as it moves.",
  },
  {
    id: "web",
    title: "Web Applications",
    description: "Portals, SaaS products, and operational tools built for performance and maintainability.",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "iOS and Android experiences connected to the same enterprise backends.",
  },
];

export const homeProblems = [
  { title: "Manual paperwork", detail: "Forms, approvals, and records stuck in trays and inboxes." },
  { title: "Disconnected systems", detail: "Finance, ops, and sales tools that never talk to each other." },
  { title: "Excel dependency", detail: "Critical operations living in fragile shared spreadsheets." },
  { title: "Poor reporting", detail: "Decisions delayed waiting for someone to assemble last month’s numbers." },
  { title: "Inventory mistakes", detail: "Stockouts, overstock, and no single source of truth." },
  { title: "No automation", detail: "Teams repeating the same tasks every day by hand." },
  { title: "No real-time visibility", detail: "Leaders flying blind between weekly status meetings." },
  { title: "Legacy software", detail: "Aging systems that can’t scale, integrate, or stay secure." },
];

export const homeExtraIndustries = [
  { id: "manufacturing", title: "Manufacturing", tag: "Operations" },
  { id: "garments", title: "Garments", tag: "Production" },
  { id: "steel", title: "Steel", tag: "Heavy industry" },
  { id: "logistics", title: "Logistics", tag: "Supply chain" },
  { id: "construction", title: "Construction", tag: "Projects" },
];

export const homeProcessSteps = [
  "Discovery",
  "Business Analysis",
  "System Design",
  "UI/UX",
  "Development",
  "Testing",
  "Deployment",
  "Support",
];

export const homeWhyPoints = [
  {
    title: "Business-first approach",
    description: "We start from operations and outcomes — then choose the architecture that fits.",
  },
  {
    title: "Enterprise architecture",
    description: "Modular systems designed for roles, auditability, and growth.",
  },
  {
    title: "Custom development",
    description: "Software shaped to your workflows — not forced into a one-size product.",
  },
  {
    title: "AI ready",
    description: "Assistants and automation wired into real processes with clear ownership.",
  },
  {
    title: "Scalable systems",
    description: "Built to absorb more users, data, and integrations without a rewrite.",
  },
  {
    title: "Dedicated team",
    description: "Named engineers you can reach — the people who write the code.",
  },
  {
    title: "Long-term support",
    description: "Launch is a milestone. We stay for monitoring, fixes, and roadmap work.",
  },
  {
    title: "Security & performance",
    description: "Access controls, encrypted data, and performance budgets from sprint one.",
  },
];

export const homeTechStack = [
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Python",
  "OpenAI",
  "Docker",
  "AWS",
  "Azure",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "TensorFlow",
  "React Native",
  "Flutter",
  "Framer Motion",
  "Tailwind CSS",
];

export const homeFeaturedProjectIds = [
  "playpen-school",
  "mango-ev",
  "acumens-media",
  "career-craft-ai",
  "noksha",
] as const;
