import React from "react";
import Product, { IProduct } from "@/models/Product";
import connectToDatabase from "@/lib/mongoDb";

const getProducts = async (): Promise<IProduct[]> => {
  await connectToDatabase();
  const products = await Product.find().lean();
  return products;
};

const AllProducts: React.FC = async () => {
  const products = await getProducts();

  return (
    <div className="pt-24 md:p-48">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Продукти</h1>
      </div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Име</th>
            <th className="py-2 px-4 border-b">Описание</th>
            <th className="py-2 px-4 border-b">Вкус</th>
            <th className="py-2 px-4 border-b">Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td className="py-2 px-4 border-b">{product.title}</td>
              <td className="py-2 px-4 border-b">{product.description}</td>
              <td className="py-2 px-4 border-b">{product.flavor}</td>
              <td className="py-2 px-4 border-b">
                <a
                  href={`/admin/edit/${product.slug}`}
                  className="text-blue-500"
                >
                  Редактирай
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
