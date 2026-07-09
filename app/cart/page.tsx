"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-5xl p-8">
        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        <div className="rounded-xl border p-10 text-center text-gray-500">
          Your cart is empty.
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl p-8">

      <h1 className="mb-8 text-4xl font-bold">
        Shopping Cart
      </h1>

      <div className="space-y-6">

        {cart.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl bg-white p-5 shadow"
          >

            <div className="flex items-center gap-5">

              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
              />

              <div>

                <h2 className="font-semibold">
                  {item.title}
                </h2>

                <p>${item.price}</p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={() => decreaseQuantity(item.id)}
                className="rounded bg-gray-200 px-3 py-1"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="rounded bg-gray-200 px-3 py-1"
              >
                +
              </button>

            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="rounded bg-red-500 px-4 py-2 text-white"
            >
              Remove
            </button>

          </div>

        ))}

      </div>

      <div className="mt-10 rounded-xl bg-indigo-700 p-6 text-white">

        <h2 className="text-2xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </h2>

      </div>

    </main>
  );
}