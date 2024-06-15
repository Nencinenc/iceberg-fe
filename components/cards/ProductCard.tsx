import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProductCardProps {
  title: string;
  mainImage: string | StaticImageData;
  slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  mainImage,
  slug,
}) => {
  return (
    <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg shadow-md">
      <a
        className="relative mx-3 mt-3 flex w-full h-[400px] overflow-hidden rounded-xl"
        href={`/products/${slug}`}
      >
        <Image
          className="peer absolute top-10 right-0 h-80 mx-auto w-full object-cover"
          src={typeof mainImage === "string" ? mainImage : mainImage.src}
          alt={title}
          width={300}
          height={300}
        />
      </a>
      <div className="mt-4 px-5 pb-5 text-center">
        <a href="#">
          <h5 className="text-xl tracking-tight text-white font-bold">
            {title}
          </h5>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
