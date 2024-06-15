import React from "react";
import Product, { IProduct } from "@/models/Product";
import connectToDatabase from "@/lib/mongoDb";
import { faEdit, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getProducts = async (): Promise<IProduct[]> => {
  await connectToDatabase();
  const products = await Product.find().lean();
  return products;
};

const AllProducts: React.FC = async () => {
  const products = await getProducts();

  return (
    <div className="mx-auto mt-24 md:mt-48 max-w-screen-lg px-2 text-white">
      <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <p className="flex-1 text-base font-bold">Всички продукти</p>
        <a href="/admin/add-products">Добави нов продукт</a>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border shadow">
        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead className="hidden border-b lg:table-header-group">
            <tr className="">
              <td
                width="50%"
                className="whitespace-normal py-4 text-sm font-medium  sm:px-6"
              >
                Име
              </td>
              <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">
                Вкус
              </td>
              <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">
                Бройки в кутия
              </td>
              <td className="whitespace-normal py-4 text-sm font-medium sm:px-6">
                Описание
              </td>
            </tr>
          </thead>

          <tbody className="lg:border-gray-300">
            {products.map((product) => (
              <tr key={product.slug} className="">
                <td
                  width="50%"
                  className="whitespace-no-wrap py-4 text-sm font-bold sm:px-6"
                >
                  {product.title}
                </td>
                <td className="whitespace-no-wrap hidden py-4 text-sm font-normalsm:px-6 lg:table-cell">
                  {product.flavor}
                </td>
                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm lg:text-left">
                  {product.unitsInPackage}
                </td>
                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm lg:text-left">
                  {product.description}
                </td>

                <td className="py-4 text-sm flex flex-row justify-between font-normal text-gray-500 sm:px-6">
                  <a href={`/admin/edit/${product.slug}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </a>
                  <a href={`/admin/delete/${product.slug}`}>
                    <FontAwesomeIcon icon={faX} />
                  </a>
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
