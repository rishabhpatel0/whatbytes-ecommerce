"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type ShopContextType = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
  
    selectedCategory: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
  
    maxPrice: number;
    setMaxPrice: Dispatch<SetStateAction<number>>;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);

  return (
    <ShopContext.Provider
        value={{
            search,
            setSearch,
            selectedCategory,
            setSelectedCategory,
            maxPrice,
            setMaxPrice,
        }}
>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used inside ShopProvider");
  }

  return context;
}