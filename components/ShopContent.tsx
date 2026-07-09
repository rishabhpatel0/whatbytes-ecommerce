"use client";

import { useEffect } from "react";
import {
  useSearchParams,
  useRouter,
  usePathname,
} from "next/navigation";

import { useShop } from "@/context/ShopContext";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import ProductListing from "./ProductListing";
import { Product } from "@/types/product";

type Props = {
  products: Product[];
};

export default function ShopContent({ products }: Props) {
    
    const {
        search,
        setSearch,
        selectedCategory,
        setSelectedCategory,
        maxPrice,
        setMaxPrice,
      } = useShop();
      
      const searchParams = useSearchParams();
      const router = useRouter();
      const pathname = usePathname();

      useEffect(() => {
        const urlSearch = searchParams.get("search");
        const urlCategory = searchParams.get("category");
        const urlPrice = searchParams.get("price");
      
        if (urlSearch) {
          setSearch(urlSearch);
        }
      
        if (urlCategory) {
          setSelectedCategory(urlCategory);
        }
      
        if (urlPrice) {
          setMaxPrice(Number(urlPrice));
        }
      }, []);

      useEffect(() => {
        const params = new URLSearchParams();
      
        if (search) {
          params.set("search", search);
        }
      
        if (selectedCategory !== "all") {
          params.set("category", selectedCategory);
        }
      
        params.set("price", String(maxPrice));
      
        router.replace(`${pathname}?${params.toString()}`);
      }, [
        search,
        selectedCategory,
        maxPrice,
        router,
        pathname,
      ]);
      
  return (
    <>
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
    </>
  );
}