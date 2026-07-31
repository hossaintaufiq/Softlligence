import type { Metadata } from "next";
import { ProductsCatalogView } from "@/components/products-page/ProductsCatalogView";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Softlligence ERP, CRM, and MIS — enterprise platforms with a 7-day free cloud trial, plus integration and local deployment options.",
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsCatalogView />
    </main>
  );
}
