import type { Metadata } from "next";
import { ProductsCatalogView } from "@/components/products-page/ProductsCatalogView";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI-powered Softlligence ERP, CRM, and MIS — purchase recommendations, AI summaries, mobile, WordPress, and Telegram chatbot, with a 7-day free cloud trial.",
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsCatalogView />
    </main>
  );
}
