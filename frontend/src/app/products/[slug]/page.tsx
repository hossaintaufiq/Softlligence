import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/products-page/ProductDetailView";
import { getProduct, productSlugs, type ProductSlug } from "@/lib/productsContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return { title: "Product" };
  }
  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product || !productSlugs.includes(slug as ProductSlug)) {
    notFound();
  }

  return (
    <main>
      <ProductDetailView product={product} />
    </main>
  );
}
