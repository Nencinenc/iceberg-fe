"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IProduct } from "@/models/Product";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-gray-300 text-sm line-clamp-2 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center text-white text-sm font-medium"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="mr-2 group-hover:mr-3 transition-all duration-300">Виж повече</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
