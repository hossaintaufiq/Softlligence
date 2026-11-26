/**
 * Panels of the product suite on the home page.
 *
 * To add a project: put its screenshots in public/images/projects/<id>/ (12:5,
 * about 1600×667) and add an entry to `suitePanels`. To give ERP or CRM real
 * screenshots, add `screens` to its entry; they replace the illustrative preview.
 */
import { pageRoutes } from "@/lib/navigation";
import { getProduct, productLaunchUrl, type ProductSlug } from "@/lib/productsContent";
import { tools } from "@/lib/toolsContent";

export type ProjectScreen = {
  src: string;
  /** Short name shown under the thumbnail. */
  label: string;
  alt: string;
};

export type SuitePanel = {
  id: string;
  /** Written on the closed panel, so keep it to a word or two. */
  shortName: string;
  name: string;
  summary: string;
  /** Panel colour, taken from the product's own interface where there is one. */
  stage: { from: string; to: string };
  action?: { href: string; label: string };
  details: { href: string; label: string };
  screens?: ProjectScreen[];
  /** Product whose illustrative preview stands in while there are no screenshots. */
  mock?: ProductSlug;
};

const shot = (project: string, file: string, label: string, alt: string): ProjectScreen => ({
  src: `/images/projects/${project}/${file}.webp`,
  label,
  alt,
});

/** Name, demo or trial link and details link shared with the product pages. */
function fromProduct(slug: ProductSlug) {
  const product = getProduct(slug);
  if (!product) throw new Error(`Unknown product: ${slug}`);
  return {
    id: slug,
    shortName: product.shortName,
    name: product.name,
    summary: product.summary,
    action: {
      href: productLaunchUrl(product),
      label: product.liveUrl ? "Open live demo" : "Start 7-day trial",
    },
    details: { href: `${pageRoutes.products}/${slug}`, label: "Product details" },
  };
}

const showroomUrl = tools.find((t) => t.slug === "showroom")?.liveUrl;

/** Panels with screenshots come first; the first one starts open. */
export const suitePanels: SuitePanel[] = [
  {
    ...fromProduct("mis"),
    summary:
      "Follows a steel plant from the scrap yard to dispatch, with output, yield and losses at each stage, breakdown tickets and exportable reports.",
    stage: { from: "#0b1022", to: "#7a5c24" },
    screens: [
      shot("mis", "overview", "Overview", "Plant overview showing tonnage and yield at five production stages"),
      shot("mis", "throughput", "Throughput", "Throughput chart for liquid steel, billets and rebar, with the rebar size mix"),
      shot("mis", "downtime", "Downtime", "Downtime tracker with total stoppage time and breakdown tickets"),
      shot("mis", "reports", "Reports", "Reports hub with a customer statement table and billing totals"),
    ],
  },
  {
    ...fromProduct("inventory"),
    summary:
      "Keeps products, warehouses, purchasing and sales orders in one place, and lists what needs reordering before it runs out.",
    stage: { from: "#090b12", to: "#2457b8" },
    screens: [
      shot("inventory", "dashboard", "Dashboard", "Inventory dashboard with stock value, revenue and a sales against purchases chart"),
      shot("inventory", "reorder", "Reordering", "Stock value by category beside the list of items that need reordering"),
      shot("inventory", "orders", "Sales orders", "Recent sales orders with customer, date, status and total"),
      shot("inventory", "products", "Products", "Product catalogue with stock levels, cost and price"),
      shot("inventory", "warehouses", "Warehouses", "Three warehouses with capacity used and stock value"),
    ],
  },
  {
    id: "showroom",
    shortName: "Showroom",
    name: "Kia 3D Showroom",
    summary:
      "A car website where visitors browse the electric lineup, then turn a model around and see it in each of six paint colours.",
    stage: { from: "#1c252d", to: "#5f8299" },
    action: showroomUrl ? { href: showroomUrl, label: "Open live demo" } : undefined,
    details: { href: `${pageRoutes.tools}#showroom`, label: "About Showroom" },
    screens: [
      shot("showroom", "home", "Lineup", "Showroom home page with seven electric cars parked outside a modern building"),
      shot("showroom", "colours", "Colour viewer", "Car viewer showing a blue SUV with six paint colour swatches"),
    ],
  },
  {
    ...fromProduct("erp"),
    stage: { from: "#0a1033", to: "#3c3fb4" },
    mock: "erp",
  },
  {
    ...fromProduct("crm"),
    stage: { from: "#150f31", to: "#6a3fb8" },
    mock: "crm",
  },
];
