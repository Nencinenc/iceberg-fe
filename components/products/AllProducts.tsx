import React from "react";
import ProductCard from "../cards/ProductCard";
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
    <section className="py-40 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Нашите{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">продукти</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Открийте нашата селекция от висококачествени никотинови продукти, създадени за вашето удоволствие и удобство.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
