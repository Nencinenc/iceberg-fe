import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo_volk.png";

const Footer: React.FC = () => {
  const navItems = [
    { href: "/", label: "Начало" },
    { href: "/products", label: "Продукти" },
    { href: "/locations", label: "Локации" },
    { href: "/contacts", label: "Контакти" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 pt-20 pb-10 px-6">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full p-1">
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
            <Image className="w-16 h-16 object-contain" src={Logo} alt="Iceberg" />
          </div>
        </div>
      </div>
      <nav
        aria-label="Footer Navigation"
        className="max-w-4xl mx-auto mb-10 flex flex-wrap justify-center gap-8 text-center"
      >
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
        <p>© 2024 Iceberg | Всички права запазени.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white transition-colors duration-200">
            Поверителност
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors duration-200">
            Условия за ползване
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
