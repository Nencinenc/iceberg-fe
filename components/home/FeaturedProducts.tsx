import React from "react";
import ProductCard from "../cards/ProductCard";
import Product, { IProduct } from "@/models/Product";
import connectToDatabase from "@/lib/mongoDb";

const getProducts = async (): Promise<IProduct[]> => {
  await connectToDatabase();
  const products = await Product.find({ featured: true }).lean();
  return products;
};

const FeaturedProducts: React.FC = async () => {
  const products = await getProducts();

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Нашите{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">предложения</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Открийте нашата селекция от висококачествени продукти, създадени за вашето удоволствие
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products
            .reverse()
            .slice(0, 3)
            .map((product, index) => (
              <div key={index}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
