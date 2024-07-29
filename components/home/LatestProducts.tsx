import React from "react";
import ProductCard from "../cards/ProductCard";
import Product, { IProduct } from "@/models/Product";
import connectToDatabase from "@/lib/mongoDb";

const getProducts = async (): Promise<IProduct[]> => {
  await connectToDatabase();
  const products = await Product.find().lean();
  return products;
};

const LatestProducts: React.FC = async () => {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-screen-xl min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold mb-8">Най-новите продукти</h2>
      </div>
      <div className="flex flex-row gap-10 justify-center flex-wrap">
        {products.reverse().splice(0,3).map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
