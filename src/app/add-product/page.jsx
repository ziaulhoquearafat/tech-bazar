"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useState } from "react";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    productName: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    imageURL: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.insertedId) {
      alert("Product added successfully!");
      setFormData({
        productName: "",
        shortDescription: "",
        fullDescription: "",
        price: "",
        imageURL: "",
        category: "",
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Add Product</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={formData.productName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="shortDescription"
            placeholder="Short Description"
            value={formData.shortDescription}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="fullDescription"
            placeholder="Full Description"
            value={formData.fullDescription}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="imageURL"
            placeholder="Image URL"
            value={formData.imageURL}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
