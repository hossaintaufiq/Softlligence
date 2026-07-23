/** Dedicated content for the /services page redesign. Home page still uses `services` in content.ts. */

export const servicesPageHero = {
  titleLine1: "Enterprise Software",
  titleLine2: "Built for Scale.",
  subtitle:
    "We build intelligent digital systems that power modern businesses—from startups to manufacturing enterprises.",
  primaryCta: { label: "Explore Services", href: "#service-catalog" },
  secondaryCta: { label: "View Portfolio", href: "/work" },
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  timeline: string;
};

export type ServiceCategory = {
  id: string;
  index: string;
  title: string;
  summary: string;
  accent: "purple" | "blue";
  services: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "enterprise",
    index: "01",
    title: "Enterprise Solutions",
    summary:
      "Operational systems that unify finance, production, inventory, people, and decision-making across the organization.",
    accent: "purple",
    services: [
      {
        id: "erp",
        title: "Enterprise Resource Planning (ERP)",
        description:
          "Unified finance, procurement, inventory, and operations in one controlled system of record.",
        features: [
          "Multi-module finance & ops core",
          "Role-based workflows",
          "Audit trails & approvals",
          "Reporting that leadership trusts",
        ],
        technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis"],
        timeline: "12–28 weeks",
      },
      {
        id: "mes",
        title: "Manufacturing Execution Systems (MES)",
        description:
          "Shop-floor visibility from work orders to quality checks—built for plants that need real-time control.",
        features: [
          "Work-order tracking",
          "Machine & line status",
          "Quality checkpoints",
          "Production dashboards",
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "MQTT", "Docker"],
        timeline: "14–32 weeks",
      },
      {
        id: "crm",
        title: "Customer Relationship Management (CRM)",
        description:
          "Pipeline, accounts, and customer history structured so sales and support share one truth.",
        features: [
          "Lead & deal pipelines",
          "Account timelines",
          "Activity logging",
          "Team performance views",
        ],
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
        timeline: "8–16 weeks",
      },
      {
        id: "cms",
        title: "Content Management Systems (CMS)",
        description:
          "Editorial systems your marketing team can run without engineering for every page change.",
        features: [
          "Structured content models",
          "Role-based publishing",
          "Media library",
          "Preview before publish",
        ],
        technologies: ["Next.js", "Headless CMS", "Cloudinary", "TypeScript"],
        timeline: "4–10 weeks",
      },
      {
        id: "wms",
        title: "Warehouse Management Systems (WMS)",
        description:
          "Receiving, put-away, picking, and shipping workflows designed for accuracy at volume.",
        features: [
          "Bin & location control",
          "Pick/pack flows",
          "Barcode-ready ops",
          "Inventory reconciliation",
        ],
        technologies: ["React", "NestJS", "PostgreSQL", "Docker"],
        timeline: "12–24 weeks",
      },
      {
        id: "inventory",
        title: "Inventory Management Systems",
        description:
          "Stock visibility across locations with alerts, transfers, and forecasting hooks.",
        features: [
          "Multi-location stock",
          "Low-stock alerts",
          "Transfer workflows",
          "SKU-level history",
        ],
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
        timeline: "6–14 weeks",
      },
      {
        id: "hrms",
        title: "Human Resource Management Systems (HRMS)",
        description:
          "People operations—onboarding, attendance, leave, and records—in one secure platform.",
        features: [
          "Employee records",
          "Leave & attendance",
          "Onboarding flows",
          "Access-controlled HR data",
        ],
        technologies: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
        timeline: "10–20 weeks",
      },
      {
        id: "scm",
        title: "Supply Chain Management",
        description:
          "Procurement, vendor coordination, and logistics visibility from order to delivery.",
        features: [
          "Vendor & PO tracking",
          "Shipment milestones",
          "Exception alerts",
          "Cost & ETA views",
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
        timeline: "12–26 weeks",
      },
      {
        id: "bi",
        title: "Business Intelligence Dashboards",
        description:
          "Executive and ops dashboards that turn operational data into decisions—not slide decks.",
        features: [
          "KPI scorecards",
          "Live & scheduled refresh",
          "Role-filtered views",
          "Export & share flows",
        ],
        technologies: ["Next.js", "PostgreSQL", "Python", "Redis"],
        timeline: "4–12 weeks",
      },
      {
        id: "custom-enterprise",
        title: "Custom Enterprise Software",
        description:
          "Purpose-built platforms when off-the-shelf tools force workarounds your teams can't afford.",
        features: [
          "Domain-first modeling",
          "Integration-ready APIs",
          "Scalable architecture",
          "Handoff documentation",
        ],
        technologies: ["TypeScript", "NestJS", "PostgreSQL", "Docker", "AWS"],
        timeline: "8–36 weeks",
      },
    ],
  },
  {
    id: "digital-products",
    index: "02",
    title: "Digital Products",
    summary:
      "Customer-facing and internal products—sites, apps, portals, and SaaS—shipped for performance and ownership you keep.",
    accent: "blue",
    services: [
      {
        id: "websites",
        title: "Websites",
        description:
          "High-performance marketing and corporate sites that load fast, rank cleanly, and stay maintainable.",
        features: [
          "SEO-ready structure",
          "CMS or admin updates",
          "Responsive & accessible",
          "Analytics-ready launch",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Vercel"],
        timeline: "3–8 weeks",
      },
      {
        id: "web-apps",
        title: "Web Applications",
        description:
          "Complex browser applications with auth, workflows, and data models built for daily use.",
        features: [
          "Secure authentication",
          "Workflow engines",
          "Admin tooling",
          "API-first backends",
        ],
        technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
        timeline: "8–20 weeks",
      },
      {
        id: "saas",
        title: "SaaS Platforms",
        description:
          "Multi-tenant products with billing hooks, usage controls, and growth-ready architecture.",
        features: [
          "Tenant isolation",
          "Subscription-ready hooks",
          "Usage metering paths",
          "Admin & customer portals",
        ],
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe"],
        timeline: "12–28 weeks",
      },
      {
        id: "portals",
        title: "Client Portals",
        description:
          "Branded spaces where clients submit, track, and retrieve work without email chaos.",
        features: [
          "Secure client login",
          "Document exchange",
          "Status tracking",
          "Notification flows",
        ],
        technologies: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
        timeline: "6–14 weeks",
      },
      {
        id: "dashboards",
        title: "Internal Dashboards",
        description:
          "Operator consoles for teams who live in data—clear, fast, and permission-aware.",
        features: [
          "Role-based views",
          "Filterable tables",
          "Realtime updates",
          "Actionable alerts",
        ],
        technologies: ["React", "TypeScript", "PostgreSQL", "Redis"],
        timeline: "4–12 weeks",
      },
    ],
  },
  {
    id: "mobile",
    index: "03",
    title: "Mobile",
    summary:
      "Native and cross-platform mobile products for field teams, customers, and on-the-go operations.",
    accent: "purple",
    services: [
      {
        id: "android",
        title: "Android Apps",
        description:
          "Play Store–ready Android applications with offline patterns and device-aware UX.",
        features: [
          "Material-aligned UI",
          "Push notifications",
          "Offline-capable flows",
          "Play Store release support",
        ],
        technologies: ["Kotlin", "React Native", "Firebase"],
        timeline: "8–18 weeks",
      },
      {
        id: "ios",
        title: "iOS Apps",
        description:
          "App Store–ready iOS experiences with polish, performance, and Apple guideline alignment.",
        features: [
          "Native iOS patterns",
          "Secure storage",
          "Push & deep links",
          "App Store submission",
        ],
        technologies: ["Swift", "React Native", "Firebase"],
        timeline: "8–18 weeks",
      },
      {
        id: "react-native",
        title: "React Native Apps",
        description:
          "One codebase for iOS and Android when speed-to-market and shared logic matter most.",
        features: [
          "Shared business logic",
          "Native modules when needed",
          "OTA-friendly releases",
          "Unified design system",
        ],
        technologies: ["React Native", "TypeScript", "Expo", "Firebase"],
        timeline: "8–20 weeks",
      },
    ],
  },
  {
    id: "ai",
    index: "04",
    title: "Artificial Intelligence",
    summary:
      "Practical AI layered into real workflows—assistants, document intelligence, automation, and analytics.",
    accent: "blue",
    services: [
      {
        id: "ai-integration",
        title: "AI Integration",
        description:
          "Connect models to your existing systems with guardrails, logging, and clear ownership.",
        features: [
          "API & system wiring",
          "Access controls",
          "Cost & usage monitoring",
          "Fallback paths",
        ],
        technologies: ["OpenAI", "Python", "Node.js", "LangChain"],
        timeline: "4–12 weeks",
      },
      {
        id: "ai-assistants",
        title: "AI Assistants",
        description:
          "Assistants grounded in your policies and knowledge—not generic chat bolted onto a homepage.",
        features: [
          "Org-knowledge grounding",
          "Conversation memory options",
          "Human handoff rules",
          "Eval & safety checks",
        ],
        technologies: ["OpenAI", "RAG", "Python", "PostgreSQL"],
        timeline: "6–14 weeks",
      },
      {
        id: "document-intelligence",
        title: "Document Intelligence",
        description:
          "Extract, classify, and search documents so teams stop hunting through folders and inboxes.",
        features: [
          "OCR & parsing pipelines",
          "Classification rules",
          "Searchable archives",
          "Review queues",
        ],
        technologies: ["Python", "OpenAI", "PostgreSQL", "AWS"],
        timeline: "6–16 weeks",
      },
      {
        id: "rag",
        title: "RAG Systems",
        description:
          "Retrieval-augmented generation over your private corpus with citations and access boundaries.",
        features: [
          "Chunking & embeddings",
          "Vector retrieval",
          "Cited answers",
          "Permission-aware search",
        ],
        technologies: ["LangChain", "OpenAI", "Pinecone", "Python"],
        timeline: "6–14 weeks",
      },
      {
        id: "ai-automation",
        title: "AI Automation",
        description:
          "Automate repetitive classification, routing, and review work with measurable time saved.",
        features: [
          "Workflow triggers",
          "Human-in-the-loop steps",
          "Audit logs",
          "Success metrics",
        ],
        technologies: ["Python", "Node.js", "OpenAI", "Redis"],
        timeline: "4–12 weeks",
      },
      {
        id: "predictive",
        title: "Predictive Analytics",
        description:
          "Forecast demand, risk, or performance from your operational data—not vanity charts.",
        features: [
          "Feature pipelines",
          "Model evaluation",
          "Dashboard delivery",
          "Retraining hooks",
        ],
        technologies: ["Python", "TensorFlow", "PostgreSQL", "Next.js"],
        timeline: "8–18 weeks",
      },
    ],
  },
  {
    id: "cloud-devops",
    index: "05",
    title: "Cloud & DevOps",
    summary:
      "Infrastructure that ships safely—cloud platforms, containers, CI/CD, monitoring, and repeatable deploys.",
    accent: "purple",
    services: [
      {
        id: "aws",
        title: "AWS",
        description:
          "Production AWS architectures with cost awareness, security baselines, and clear runbooks.",
        features: [
          "VPC & compute design",
          "Managed databases",
          "IAM least privilege",
          "Backup & recovery",
        ],
        technologies: ["AWS", "Docker", "Terraform", "GitHub Actions"],
        timeline: "2–8 weeks",
      },
      {
        id: "azure",
        title: "Azure",
        description:
          "Azure-hosted systems for teams standardized on Microsoft cloud and identity.",
        features: [
          "App Service / AKS paths",
          "Entra ID integration",
          "Secure networking",
          "Observability setup",
        ],
        technologies: ["Azure", "Docker", "CI/CD", "PostgreSQL"],
        timeline: "2–8 weeks",
      },
      {
        id: "docker",
        title: "Docker",
        description:
          "Containerized services for consistent local, staging, and production environments.",
        features: [
          "Multi-stage builds",
          "Compose for local",
          "Image hardening",
          "Registry workflows",
        ],
        technologies: ["Docker", "Compose", "Node.js", "Nginx"],
        timeline: "1–4 weeks",
      },
      {
        id: "cicd",
        title: "CI/CD",
        description:
          "Automated test and deploy pipelines so releases are routine—not weekend fire drills.",
        features: [
          "PR checks",
          "Staging deploys",
          "Rollback paths",
          "Environment secrets",
        ],
        technologies: ["GitHub Actions", "Docker", "AWS", "Azure"],
        timeline: "1–3 weeks",
      },
      {
        id: "monitoring",
        title: "Monitoring",
        description:
          "Uptime, errors, and performance signals your team can act on before users complain.",
        features: [
          "Error tracking",
          "Uptime alerts",
          "Latency dashboards",
          "On-call friendly alerts",
        ],
        technologies: ["Datadog", "Sentry", "AWS CloudWatch", "Grafana"],
        timeline: "1–3 weeks",
      },
      {
        id: "deployment",
        title: "Deployment",
        description:
          "Repeatable production launches with zero-guesswork checklists and environment parity.",
        features: [
          "Blue/green or rolling",
          "Health checks",
          "Config management",
          "Launch runbooks",
        ],
        technologies: ["Docker", "AWS", "Azure", "GitHub Actions"],
        timeline: "1–4 weeks",
      },
    ],
  },
  {
    id: "support",
    index: "06",
    title: "Support",
    summary:
      "Long-horizon ownership—maintenance, modernization, security, and support after launch.",
    accent: "blue",
    services: [
      {
        id: "maintenance",
        title: "Maintenance",
        description:
          "Steady care for production systems: patches, dependency hygiene, and operational fixes.",
        features: [
          "Dependency updates",
          "Bug triage SLA",
          "Performance tune-ups",
          "Monthly health reports",
        ],
        technologies: ["Node.js", "Docker", "AWS", "Monitoring"],
        timeline: "Ongoing",
      },
      {
        id: "modernization",
        title: "System Modernization",
        description:
          "Rebuild or re-platform legacy systems without freezing the business mid-migration.",
        features: [
          "Strangler-fig paths",
          "Data migration plans",
          "Parallel run support",
          "Risk-managed cutover",
        ],
        technologies: ["TypeScript", "NestJS", "PostgreSQL", "Docker"],
        timeline: "12–40 weeks",
      },
      {
        id: "security-updates",
        title: "Security Updates",
        description:
          "Hardening, patch cycles, and vulnerability response so security stays operational—not theoretical.",
        features: [
          "Dependency CVE response",
          "Access reviews",
          "Secret rotation support",
          "Hardening checklists",
        ],
        technologies: ["AWS", "Azure", "Docker", "CI/CD"],
        timeline: "Ongoing",
      },
      {
        id: "lts",
        title: "Long-term Support",
        description:
          "A named team that stays available—roadmap guidance, incidents, and continuous improvement.",
        features: [
          "Named engineer access",
          "Incident response",
          "Quarterly roadmap reviews",
          "Knowledge continuity",
        ],
        technologies: ["Your stack", "Monitoring", "CI/CD", "Docs"],
        timeline: "Ongoing",
      },
    ],
  },
];

export const servicesIndustries = [
  { id: "manufacturing", title: "Manufacturing", blurb: "Plant ops, MES, and production visibility." },
  { id: "garments", title: "Garments", blurb: "Production tracking and buyer-ready reporting." },
  { id: "steel", title: "Steel Mills", blurb: "Heavy-industry workflows and quality control." },
  { id: "healthcare", title: "Healthcare", blurb: "Secure records and care-coordination tools." },
  { id: "education", title: "Education", blurb: "Admissions, learning portals, and admin systems." },
  { id: "logistics", title: "Logistics", blurb: "Fleet, warehouse, and shipment visibility." },
  { id: "retail", title: "Retail", blurb: "Inventory, commerce, and store operations." },
  { id: "real-estate", title: "Real Estate", blurb: "Listings, CRM, and client portals." },
  { id: "ngos", title: "NGOs", blurb: "Program tracking and transparent reporting." },
  { id: "startups", title: "Startups", blurb: "MVPs and platforms built to scale." },
  { id: "finance", title: "Financial Services", blurb: "Controls-first products and dashboards." },
  { id: "government", title: "Government", blurb: "Citizen services with auditability." },
];

export const whySoftlligenceServices = [
  {
    title: "Enterprise-grade architecture",
    description: "Systems designed for multi-role access, auditability, and long operational life.",
  },
  {
    title: "Scalable systems",
    description: "Architectures that absorb growth in users, data, and integrations without rewrites.",
  },
  {
    title: "Modern UI",
    description: "Interfaces operators actually use—clear hierarchy, fast interactions, accessible by default.",
  },
  {
    title: "Cloud-first",
    description: "Deployed on AWS or Azure with environments, backups, and observability from day one.",
  },
  {
    title: "AI-ready",
    description: "Data models and APIs structured so intelligence layers plug in without chaos.",
  },
  {
    title: "Long-term support",
    description: "The same builders stay reachable after launch—maintenance, incidents, and evolution.",
  },
  {
    title: "Security-first",
    description: "Auth, secrets, and least-privilege access treated as product requirements—not add-ons.",
  },
  {
    title: "Role-based architecture",
    description: "Permissions and workflows mapped to how your organization actually works.",
  },
];

export const servicesProcessSteps = [
  "Discover",
  "Research",
  "System Design",
  "UI/UX",
  "Development",
  "Testing",
  "Deployment",
  "Support",
];

export const servicesTechnologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Azure",
  "Prisma",
  "Redis",
  "OpenAI",
  "TensorFlow",
  "React Native",
];

export const servicesFinalCta = {
  title: "Ready to build your next enterprise system?",
  subtitle: "Let's discuss your project.",
  primary: { label: "Book a Consultation", href: "/contact" },
  secondary: { label: "Start Your Project", href: "/contact" },
};
