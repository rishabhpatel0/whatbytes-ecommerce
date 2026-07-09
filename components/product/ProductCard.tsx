import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <div className="rounded-xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        <div className="flex h-44 items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="h-40 w-auto object-contain"
          />
        </div>

        <h3 className="mt-3 text-lg font-semibold text-gray-800">
          {title}
        </h3>

        <p className="mt-1 text-xl font-bold text-indigo-700">
          ${price}
        </p>

        <button
          className="mt-4 w-full rounded-lg bg-indigo-700 py-2 text-white transition hover:bg-indigo-800"
          onClick={(e) => e.preventDefault()} // We'll implement cart later
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}