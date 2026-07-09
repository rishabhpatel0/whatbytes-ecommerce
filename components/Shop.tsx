"use client";

import { Suspense } from "react";
import { Product } from "@/types/product";
import { ShopProvider } from "@/context/ShopContext";
import ShopContent from "./ShopContent";

type Props = {
  products: Product[];
};

export default function Shop({ products }: Props) {
  return (
    <ShopProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <ShopContent products={products} />
      </Suspense>
    </ShopProvider>
  );
}