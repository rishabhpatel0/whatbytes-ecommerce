"use client";

import ProductCard from "./product/ProductCard";
import { Product } from "@/types/product";
import { useShop } from "@/context/ShopContext";

type Props = {
  products: Product[];
};

export default function ProductListing({ products }: Props) {
  const { search, selectedCategory, maxPrice, } = useShop();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
  
    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;
  
    const matchesPrice =
      product.price <= maxPrice;
  
    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice
    );
  });

  return (
    <>
      {filteredProducts.length === 0 ? (
        <div className="rounded-lg border border-dashed p-12 text-center text-gray-500">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.thumbnail}
            />
          ))}
        </div>
      )}
    </>
  );
}