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
  audience: string;
  capabilities: string[];
  modules: { title: string; description: string }[];
  paths: ProductPath[];
  outcomes: string[];
};

export const productsCatalogIntro = {
  eyebrow: "Products",
  title: "Enterprise platforms ready to trial.",
  lead:
    "Softlligence offers ready ERP, CRM, and MIS platforms with a 7-day free cloud trial. Need them on your website, existing stack, or local devices? We integrate and customize them around your operations.",
};

export const products: ProductRecord[] = [
  {
    slug: "erp",
    name: "Softlligence ERP",
    shortName: "ERP",
    tagline: "Operations, finance, and inventory in one system of record.",
    summary:
      "Unify purchasing, stock, finance, and day-to-day operations so teams stop living in spreadsheets.",
    description:
      "Softlligence ERP is built for organizations that need reliable control over inventory, procurement, accounting workflows, and operational visibility — with room to customize as you grow.",
    audience: "Manufacturers, distributors, multi-branch businesses, and growing operators.",
    capabilities: [
      "Finance & ledger workflows",
      "Inventory & warehouses",
      "Procurement & vendors",
      "Sales orders & invoicing",
      "Role-based access",
      "Operational dashboards",
    ],
    modules: [
      {
        title: "Finance",
        description: "Track receivables, payables, and core ledgers without disconnected tools.",
      },
      {
        title: "Inventory",
        description: "Real-time stock, transfers, and warehouse visibility across locations.",
      },
      {
        title: "Procurement",
        description: "Vendor management, purchase orders, and receiving in one flow.",
      },
      {
        title: "Operations",
        description: "Order-to-fulfillment visibility for teams that need one source of truth.",
      },
    ],
    paths: [
      {
        id: "trial",
        title: "7-day cloud trial",
        description: "Spin up a sandbox tenant and explore ERP with demo data — free for seven days.",
      },
      {
        id: "integrate",
        title: "Integrate with your systems",
        description: "Connect ERP to your website, APIs, or existing tools with Softlligence engineering.",
      },
      {
        id: "local",
        title: "Local / on-prem deployment",
        description: "Run on your own servers or local devices when cloud is not the right fit.",
      },
    ],
    outcomes: [
      "Replace spreadsheet-driven operations",
      "Connect finance, stock, and fulfillment",
      "Scale branches without losing control",
    ],
  },
  {
    slug: "crm",
    name: "Softlligence CRM",
    shortName: "CRM",
    tagline: "Pipeline, customers, and service — built for how your team sells.",
    summary:
      "Manage leads, deals, customer history, and follow-ups in a platform your sales and support teams will actually use.",
    description:
      "Softlligence CRM helps commercial teams capture demand, move deals forward, and keep customer context in one place — ready for cloud trial or integration into your stack.",
    audience: "Sales teams, agencies, service businesses, and growing B2B operators.",
    capabilities: [
      "Lead & pipeline tracking",
      "Contact & company records",
      "Deal stages & activities",
      "Follow-up reminders",
      "Service / ticket notes",
      "Lightweight reporting",
    ],
    modules: [
      {
        title: "Pipeline",
        description: "See every deal stage clearly — from first inquiry to closed won.",
      },
      {
        title: "Customers",
        description: "Keep people, companies, and conversation history connected.",
      },
      {
        title: "Activities",
        description: "Calls, notes, and tasks that keep follow-ups from falling through.",
      },
      {
        title: "Insights",
        description: "Simple views of conversion and workload without heavy BI overhead.",
      },
    ],
    paths: [
      {
        id: "trial",
        title: "7-day cloud trial",
        description: "Try CRM with sample pipeline data and invite your team during the trial window.",
      },
      {
        id: "integrate",
        title: "Integrate with your website",
        description: "Connect web forms, chat, or existing tools so leads land where sales works.",
      },
      {
        id: "local",
        title: "Local / on-prem deployment",
        description: "Deploy CRM in your environment when data residency or offline needs require it.",
      },
    ],
    outcomes: [
      "Stop losing leads in inboxes",
      "Give sales one shared pipeline",
      "Keep customer context after the deal",
    ],
  },
  {
    slug: "mis",
    name: "Softlligence MIS",
    shortName: "MIS",
    tagline: "Management information that turns operations into decisions.",
    summary:
      "Dashboards and operational reports that pull the right numbers for leadership — without another spreadsheet ritual.",
    description:
      "Softlligence MIS focuses on management visibility: KPIs, departmental reports, and decision-ready views that sit on top of your operations data — trial in the cloud or integrate with your systems.",
    audience: "Founders, ops leads, and managers who need clear reporting across teams.",
    capabilities: [
      "Executive dashboards",
      "Departmental reports",
      "KPI tracking",
      "Exportable summaries",
      "Role-based views",
      "Data connectors (as configured)",
    ],
    modules: [
      {
        title: "Dashboards",
        description: "At-a-glance views for leadership across sales, ops, and finance signals.",
      },
      {
        title: "Reports",
        description: "Repeatable management reports instead of one-off spreadsheet builds.",
      },
      {
        title: "KPIs",
        description: "Track the metrics that matter for your operating rhythm.",
      },
      {
        title: "Access",
        description: "Give each role the visibility they need — nothing more, nothing less.",
      },
    ],
    paths: [
      {
        id: "trial",
        title: "7-day cloud trial",
        description: "Explore MIS dashboards and sample reports in a guided trial environment.",
      },
      {
        id: "integrate",
        title: "Integrate with your data sources",
        description: "Connect MIS to ERP, CRM, databases, or local systems with Softlligence support.",
      },
      {
        id: "local",
        title: "Local / on-prem deployment",
        description: "Host MIS inside your network when reporting data must stay on-site.",
      },
    ],
    outcomes: [
      "Replace manual management packs",
      "See performance across departments",
      "Decide faster with trusted numbers",
    ],
  },
];

export function getProduct(slug: string): ProductRecord | undefined {
  return products.find((p) => p.slug === slug);
}

export const productSlugs = products.map((p) => p.slug);
