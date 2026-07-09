"use client";

import { Product } from "@/types/product";
import { ShopProvider } from "@/context/ShopContext";
import ShopContent from "./ShopContent";

type Props = {
  products: Product[];
};

export default function Shop({ products }: Props) {
  return (
    <ShopProvider>
      <ShopContent products={products} />
    </ShopProvider>
  );
}