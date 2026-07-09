import { ProductsResponse } from "@/types/product";

const BASE_URL = "https://dummyjson.com";

export async function getProducts(): Promise<ProductsResponse> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: {
        revalidate: 3600,
      },
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

export async function getProduct(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}