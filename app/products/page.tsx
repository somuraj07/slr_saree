// app/products/page.tsx
import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading products...</div>}>
      <ProductsClient />
    </Suspense>
  );
}
