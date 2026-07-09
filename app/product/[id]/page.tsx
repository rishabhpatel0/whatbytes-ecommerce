import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/api";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left Side */}
        <div className="rounded-xl bg-white p-6 shadow">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className="mx-auto h-auto w-full object-contain"
          />
        </div>

        {/* Right Side */}
        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>

          <p className="mt-4 text-3xl font-bold text-indigo-700">
            ${product.price}
          </p>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <div className="mt-6 space-y-2">
            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>
          </div>

          {/* Quantity */}
          <div className="mt-8 flex items-center gap-4">
            <button className="rounded bg-gray-200 px-4 py-2">
              -
            </button>

            <span className="text-xl">1</span>

            <button className="rounded bg-gray-200 px-4 py-2">
              +
            </button>
          </div>

          <button className="mt-8 rounded-lg bg-indigo-700 px-8 py-3 text-white hover:bg-indigo-800">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}