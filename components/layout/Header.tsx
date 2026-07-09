"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { search, setSearch } = useShop();
  const { cart } = useCart();

  return (
    <header className="bg-indigo-700 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-3xl font-bold">Logo</h1>

        <div className="relative hidden w-[420px] md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
          />

          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-indigo-400 bg-indigo-600 py-2 pl-10 pr-4 outline-none placeholder:text-gray-300 focus:border-white"
          />
        </div>

        <div className="flex items-center gap-4">
        <Link href="/cart">
          <button className="relative flex items-center gap-2 rounded-lg bg-indigo-800 px-4 py-2">
              <ShoppingCart size={18} />
              Cart
            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">
                {cart.length}
              </span>
            )}
          </button>
        </Link>

          <div className="rounded-full bg-indigo-800 p-2">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}