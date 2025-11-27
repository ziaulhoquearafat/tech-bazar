"use client";

import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const router = useRouter();

  return (
    <div className="card bg-base-100 shadow-lg border p-3">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover rounded"
        />
      </figure>

      <div className="card-body space-y-2">
        <h2 className="card-title">{product.name}</h2>

        <p className="text-gray-600">{product.description?.slice(0, 70)}...</p>

        <p className="font-bold text-lg">Price: ${product.price}</p>

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => router.push(`/products/${product._id}`)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
