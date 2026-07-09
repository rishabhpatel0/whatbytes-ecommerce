import { ProductsResponse } from "@/types/product";

const BASE_URL = "https://dummyjson.com";

export async function getProducts(): Promise<ProductsResponse> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      products: [],
    };
  }
}