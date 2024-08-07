import React from "react";

import Logo from "@/assets/logo_volk.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-sky-500 px-4 pt-20">
      <div className="absolute -top-10 left-1/2 w-20 h-20 -translate-x-1/2 rounded-xl border-2 border-sky-500 bg-white p-2">
        <Image
          className="h-full w-full object-cover mt-2"
          src={Logo}
          alt="Iceberg"
        />
      </div>
      <nav
        aria-label="Footer Navigation"
        className="mx-auto mb-10 flex justify-center flex-col gap-10 text-center sm:flex-row sm:text-left"
      >
        <a href="/" className="font-medium text-white">
          Начало
        </a>
        <a href="/products" className="font-medium text-white">
          Продукти
        </a>
        <a href="/locations" className="font-medium text-white">
          Локации
        </a>
        <a href="/contacts" className="font-medium text-white">
          Контакти
        </a>
      </nav>
      <p className="py-10 text-center text-gray-300">
        © 2024 Iceberg | Всички права запазени.
      </p>
    </footer>
  );
};

export default Footer;
