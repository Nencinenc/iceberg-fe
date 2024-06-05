"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { IProduct } from "@/models/Product";

const fetchProduct = async (slug: string): Promise<IProduct | null> => {
  const response = await fetch(`/api/product/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const product = await response.json();
    return product;
  } else {
    console.error("Failed to fetch product");
    return null;
  }
};

const EditProductPage = () => {
  const router = useRouter();
  const { slug } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [flavor, setFlavor] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      const fetchedProduct = await fetchProduct(slug as string);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setTitle(fetchedProduct.title);
        setDescription(fetchedProduct.description);
        setFlavor(fetchedProduct.flavor);
      }
    };

    fetchProductData();
  }, [slug]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch(`/api/admin/edit/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, flavor }),
    });

    if (response.ok) {
      router.push("/products");
    } else {
      console.error("Failed to update product");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-24 md:p-48">
      <form
        onSubmit={handleSubmit}
        className="p-4 text-black rounded shadow-md"
      >
        <h2 className="text-2xl text-white font-bold mb-4">
          Редактирай продукт
        </h2>
        <div className="mb-4">
          <label className="text-white block mb-2">Име</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2">Описание</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2">Вкус</label>
          <input
            type="text"
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Запази
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
