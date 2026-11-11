import { pageRoutes } from "@/lib/navigation";

/** Custom-build service entries, shared by the homepage and the footer. */
export const serviceLinks = [
  { href: `${pageRoutes.services}#enterprise`, label: "Enterprise solutions" },
  { href: `${pageRoutes.services}#digital-products`, label: "Digital products" },
  { href: `${pageRoutes.services}#mobile`, label: "Mobile apps" },
  { href: `${pageRoutes.services}#ai`, label: "AI solutions" },
  { href: `${pageRoutes.services}#cloud-devops`, label: "Cloud & DevOps" },
];

export type NavItem = { href: string; label: string; description?: string };

export const solutionsMenu: NavItem[] = [
  {
    href: "/#solutions",
    label: "Enterprise solutions",
    description: "ERP, MES, CRM, BI and automation",
  },
  {
    href: pageRoutes.industries,
    label: "Industries",
    description: "Where we have built software",
  },
];

export const resourcesMenu: NavItem[] = [
  { href: pageRoutes.work, label: "Case studies", description: "Projects we have delivered" },
  { href: pageRoutes.process, label: "Delivery process", description: "From idea to launch" },
  { href: pageRoutes.faq, label: "FAQ", description: "Timelines and support" },
  { href: pageRoutes.team, label: "Our team", description: "The engineers behind the products" },
];

/** One short line per product for menus and compact lists. */
export const productBlurb: Record<string, string> = {
  erp: "Operations, finance and inventory",
  crm: "Pipeline, customers and service",
  mis: "Reporting and decisions",
  inventory: "Stock across warehouses",
};
