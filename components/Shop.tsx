"use client";

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import ProductListing from "./ProductListing";
import { Product } from "@/types/product";
import { ShopProvider } from "@/context/ShopContext";

type Props = {
  products: Product[];
};

export default function Shop({ products }: Props) {
  return (
    <ShopProvider>
      <Header />

      <main className="mx-auto flex max-w-7xl gap-8 px-6 py-8">
        <div className="w-72">
        <Sidebar products={products} />
        </div>

        <section className="flex-1">
          <h1 className="mb-6 text-4xl font-bold">
            Product Listing
          </h1>

          <ProductListing products={products} />
        </section>
      </main>
    </ShopProvider>
  );
}