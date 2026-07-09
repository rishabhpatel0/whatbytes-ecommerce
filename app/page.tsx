import Footer from "@/components/layout/Footer";
import Shop from "@/components/Shop";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const { products } = await getProducts();

  return (
    <>
      <Shop products={products} />
      <Footer />
    </>
  );
}