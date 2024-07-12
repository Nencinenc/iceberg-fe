import React from "react";
import Image from "next/image";
import { IProduct } from "@/models/Product";

interface ProductCardProps {
  product: IProduct
}

const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  return (
      <a
        className="group flex w-full max-w-xs flex-col overflow-hidden rounded-lg shadow-md border border-sky-500 p-4"
        href={`/products/${product.slug}`}
      >
        <Image
          className="h-50 w-50 mx-auto object-cover"
          src={product.imageUrl}
          alt={product.title}
          width={300}
          height={300}
        />
      <div className="px-4 text-center">
          <h5 className="text-xl tracking-tight text-white font-bold">
            {product.title}
          </h5>
          <p className="text-gray-300">
            {product.description}
          </p>
      </div>
    </a>
  );
};

export default ProductCard;
