"use client";

import { useShop } from "@/context/ShopContext";
import { Product } from "@/types/product";

type Props = {
  products: Product[];
};

export default function Sidebar({ products }: Props) {
  const {
    selectedCategory,
    setSelectedCategory,
    maxPrice,
    setMaxPrice,
  } = useShop();

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <aside className="rounded-xl bg-indigo-700 p-5 text-white">
      <h2 className="mb-5 text-2xl font-semibold">Filters</h2>

      <div className="space-y-3">
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="category"
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
            />

            <span className="capitalize">
              {category.replace("-", " ")}
            </span>
          </label>
        ))}
        <div className="mt-8">
            <h3 className="mb-3 font-semibold">Maximum Price</h3>

            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />

            <p className="mt-2 font-medium">${maxPrice}</p>
      </div>
      </div>
    </aside>
  );
}