"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { faEdit, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IProduct } from "@/models/Product";

const getProducts = async () => {
  return fetch("/api/admin/product", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.error("Failed to get products");
      return null;
    }
  });
};

const deleteProduct = async (slug: string) => {
  const response = await fetch("/api/admin/product", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  });

  if (response.ok) {
    toast.success("Продуктът е успешно изтрит");
  }
};

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    getProducts().then(products => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="mx-auto mt-24 md:mt-48 max-w-screen-lg px-2 text-white">
      <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <p className="flex-1 text-base font-bold">Всички продукти</p>
        <a href="/admin/add-product">Добави нов продукт</a>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border shadow">
        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead className="hidden border-b lg:table-header-group">
            <tr className="">
              <td width="50%" className="whitespace-normal py-4 text-sm font-medium sm:px-6 text-left">
                Име
              </td>
              <td className="whitespace-normal py-4 text-sm font-medium sm:px-6 text-left">Вкус</td>
              <td className="whitespace-normal py-4 text-sm font-medium sm:px-6 text-left">Бройки в кутия</td>
              <td className="whitespace-normal py-4 text-sm font-medium sm:px-6 text-left">Описание</td>
            </tr>
          </thead>

          <tbody className="lg:border-gray-300">
            {products?.map(product => (
              <tr key={product.slug}>
                <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold sm:px-6 text-left">
                  {product.title}
                </td>
                <td className="whitespace-no-wrap hidden py-4 text-sm sm:px-6 lg:table-cell text-left">
                  {product.flavor}
                </td>
                <td className="whitespace-no-wrap py-4 px-6 text-sm text-left">{product.unitsInPackage}</td>
                <td className="whitespace-no-wrap py-4 px-6 text-sm text-left">{product.description}</td>

                <td className="py-4 text-sm flex flex-row justify-between font-normal text-gray-500 sm:px-6">
                  <a href={`/admin/products/edit/${product.slug}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </a>
                  <button onClick={() => deleteProduct(product.slug)}>
                    <FontAwesomeIcon icon={faX} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
