/** Packaged Softlligence products — marketing content for /products. */

export const trialAppBaseUrl = "https://app.softlligence.com";

export function trialSignupUrl(product: string) {
  return `${trialAppBaseUrl}/signup?product=${encodeURIComponent(product)}`;
}

export type ProductSlug = "erp" | "crm" | "mis";

export type ProductPath = {
  id: string;
  title: string;
  description: string;
};

export type ProductRecord = {
  slug: ProductSlug;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  aiNote: string;
  audience: string;
  capabilities: string[];
  modules: { title: string; description: string }[];
  paths: ProductPath[];
  outcomes: string[];
};

/** Shared across ERP, CRM, and MIS — every Softlligence product is AI-powered. */
export const productsAiShared = {
  label: "AI-powered",
  note:
    "Every Softlligence product includes a trained recommendation model for what to buy and restock, AI-powered summaries of your data, plus access via mobile app, WordPress, and a Telegram chatbot.",
};

export const productsCatalogIntro = {
  eyebrow: "Products",
  title: "Enterprise platforms. Ready to trial.",
  lead: "AI-powered ERP, CRM, and MIS — try free for 7 days, then integrate or deploy locally.",
};

export const products: ProductRecord[] = [
  {
    slug: "erp",
    name: "Softlligence ERP",
    shortName: "ERP",
    tagline: "AI-powered operations, finance, and inventory in one system of record.",
    summary:
      "Unify purchasing, stock, finance, and day-to-day operations — with a trained model that recommends what to buy, surfaces best-selling products, and delivers AI-powered summaries.",
    description:
      "Softlligence ERP gives organizations reliable control over inventory, procurement, accounting workflows, and operational visibility. A trained recommendation model suggests what to purchase and restock based on demand and best sellers, while AI-powered summaries help teams act faster. Use it on web, mobile app, WordPress, or Telegram chatbot — with room to customize as you grow.",
    aiNote:
      "AI recommends what to buy and restock, highlights best sellers, and summarizes operations — on mobile, WordPress, and Telegram.",
    audience: "Manufacturers, distributors, multi-branch businesses, and growing operators.",
    capabilities: [
      "AI purchase & restock recommendations",
      "Best-selling product insights",
      "AI-powered operational summaries",
      "Finance & ledger workflows",
      "Inventory & warehouses",
      "Procurement & vendors",
      "Mobile app · WordPress · Telegram bot",
      "Role-based access & dashboards",
    ],
    modules: [
      {
        title: "Finance",
        description: "Track receivables, payables, and core ledgers — with AI summaries of cash and outstanding positions.",
      },
      {
        title: "Inventory",
        description: "Real-time stock plus AI recommendations on what to buy and which SKUs are best sellers.",
      },
      {
        title: "Procurement",
        description: "Vendor management, purchase orders, and AI-guided buying suggestions in one flow.",
      },
      {
        title: "AI & channels",
        description: "Trained recommendation model, AI summaries, mobile app, WordPress embed, and Telegram chatbot.",
      },
    ],
    paths: [
      {
        id: "trial",
        title: "7-day cloud trial",
        description: "Spin up a sandbox tenant and explore AI-powered ERP with demo data — free for seven days.",
      },
      {
        id: "integrate",
        title: "Integrate with your systems",
        description: "Connect ERP to your website, WordPress, APIs, mobile, or Telegram with Softlligence engineering.",
      },
      {
        id: "local",
        title: "Local / on-prem deployment",
        description: "Run on your own servers or local devices when cloud is not the right fit.",
      },
    ],
    outcomes: [
      "Buy and restock with AI recommendations",
      "See best sellers without spreadsheet digging",
      "Act on AI-powered operational summaries",
      "Reach teams on mobile, WordPress, and Telegram",
    ],
  },
  {
    slug: "crm",
    name: "Softlligence CRM",
    shortName: "CRM",
    tagline: "AI-powered pipeline, customers, and service — built for how your team sells.",
    summary:
      "Manage leads, deals, and customer history with AI that recommends next products to sell, surfaces best sellers, and summarizes pipeline activity — on web, mobile, WordPress, and Telegram.",
    description:
      "Softlligence CRM helps commercial teams capture demand, move deals forward, and keep customer context in one place. A trained model recommends what customers should buy next, highlights best-selling products, and delivers AI-powered summaries of pipeline and conversations. Access CRM from mobile app, WordPress, or Telegram chatbot — ready for cloud trial or deeper integration.",
    aiNote:
      "AI suggests what to sell next, tracks best sellers, and summarizes your pipeline — on mobile, WordPress, and Telegram.",
    audience: "Sales teams, agencies, service businesses, and growing B2B operators.",
    capabilities: [
      "AI product & purchase recommendations",
      "Best-selling product signals",
      "AI-powered pipeline summaries",
      "Lead & deal tracking",
      "Contact & company records",
      "Follow-up reminders & activities",
      "Mobile app · WordPress · Telegram bot",
      "Lightweight reporting",
    ],
    modules: [
      {
        title: "Pipeline",
        description: "See every deal stage clearly — with AI summaries of momentum and risk.",
      },
      {
        title: "Customers",
        description: "Keep people, companies, and history connected, plus AI suggestions on what to offer next.",
      },
      {
        title: "Activities",
        description: "Calls, notes, and tasks that keep follow-ups from falling through.",
      },
      {
        title: "AI & channels",
        description: "Purchase recommendations, best-seller insights, mobile app, WordPress, and Telegram chatbot.",
      },
    ],
    paths: [
      {
        id: "trial",
        title: "7-day cloud trial",
        description: "Try AI-powered CRM with sample pipeline data and invite your team during the trial window.",
      },
      {
        id: "integrate",
        title: "Integrate with your website",
        description: "Connect web forms, WordPress, chat, mobile, or Telegram so leads land where sales works.",
      },
      {
        id: "local",
        title: "Local / on-prem deployment",
        description: "Deploy CRM in your environment when data residency or offline needs require it.",
      },
    ],
    outcomes: [
      "Recommend the right products to buy next",
      "Spot best sellers across the pipeline",
      "Get AI summaries instead of status meetings",
      "Sell from mobile, WordPress, and Telegram",
    ],
  },
  {
    slug: "mis",
    name: "Softlligence MIS",
    shortName: "MIS",
    tagline: "AI-powered management information that turns operations into decisions.",
    summary:
      "Dashboards and reports with AI that recommends what to purchase, highlights best-selling products, and generates executive summaries — available on mobile, WordPress, and Telegram.",
    description:
      "Softlligence MIS focuses on management visibility: KPIs, departmental reports, and decision-ready views on top of your operations data. A trained recommendation model suggests what to buy and restock, surfaces best-selling products, and produces AI-powered summaries for leadership. Reach MIS via mobile app, WordPress, or Telegram chatbot — trial in the cloud or integrate with your systems.",
    aiNote:
      "AI recommends purchase priorities, surfaces best sellers, and writes executive summaries — on mobile, WordPress, and Telegram.",
    audience: "Founders, ops leads, and managers who need clear reporting across teams.",
    capabilities: [
      "AI purchase priority recommendations",
      "Best-selling product analysis",
      "AI-powered executive summaries",
      "Executive dashboards & KPIs",
      "Departmental reports",
      "Exportable management packs",
      "Mobile app · WordPress · Telegram bot",
      "Role-based views & connectors",
    ],
    modules: [
      {
        title: "Dashboards",
        description: "At-a-glance views for leadership — with AI callouts on demand, stock, and best sellers.",
      },
      {
        title: "Reports",
        description: "Repeatable management reports plus AI-generated summaries instead of spreadsheet rituals.",
      },
      {
        title: "KPIs",
        description: "Track the metrics that matter, including purchase and product performance signals.",
      },
      {
        title: "AI & channels",
        description: "Trained recommendations, AI summaries, mobile app, WordPress embed, and Telegram chatbot.",
      },
    ],
    paths: [
      {
        id: "trial",
        title: "7-day cloud trial",
        description: "Explore AI-powered MIS dashboards and sample reports in a guided trial environment.",
      },
      {
        id: "integrate",
        title: "Integrate with your data sources",
        description: "Connect MIS to ERP, CRM, WordPress, databases, mobile, or Telegram with Softlligence support.",
      },
      {
        id: "local",
        title: "Local / on-prem deployment",
        description: "Host MIS inside your network when reporting data must stay on-site.",
      },
    ],
    outcomes: [
      "Decide purchases with AI recommendations",
      "See best sellers in management views",
      "Read AI summaries instead of raw tables",
      "Access insights on mobile, WordPress, and Telegram",
    ],
  },
];

export function getProduct(slug: string): ProductRecord | undefined {
  return products.find((p) => p.slug === slug);
}

export const productSlugs = products.map((p) => p.slug);
