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
    <div className="mx-auto max-w-screen-xl min-h-screen pt-36 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold">Най-новите продукти</h2>
        <p className="mt-4 text-base text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          faucibus massa dignissim tempus.
        </p>
      </div>
      <div className="flex flex-row gap-10 justify-center">
        {products.map((product) => (
          <ProductCard
            title={product.title}
            slug={product.slug}
            mainImage={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
