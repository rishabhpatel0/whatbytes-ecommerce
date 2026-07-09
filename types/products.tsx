export interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    description: string;
    category: string;
    rating: number;
  }
  
  export interface ProductsResponse {
    products: Product[];
  }