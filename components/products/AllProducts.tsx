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
    <div className="mx-auto max-w-screen-xl min-h-screen pt-36 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-row gap-10 justify-center flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
