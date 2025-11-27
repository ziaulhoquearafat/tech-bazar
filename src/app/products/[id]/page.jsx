"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="btn btn-sm btn-outline mb-4"
      >
        Back
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.imageURL}
          alt={product.productName}
          className="w-full md:w-1/2 h-auto object-cover rounded"
        />

        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold">{product.productName}</h2>
            <p className="text-gray-600 mt-4">{product.fullDescription}</p>
          </div>
          <p className="mt-4 font-semibold text-xl">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
