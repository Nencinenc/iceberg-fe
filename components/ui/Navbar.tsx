"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/assets/logo_volk.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll on body when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { href: "/", label: "Начало" },
    { href: "/products", label: "Никотинови паучове" },
    { href: "/locations", label: "Локации" },
    { href: "/contacts", label: "Контакти" },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} width={150} height={60} alt="Logo" className="w-auto h-10" />
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <li key={item.href}>
              <Link href={item.href} className="text-white hover:text-sky-400 transition-colors duration-200">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center space-x-2 text-white">
          <Phone className="w-4 h-4 text-sky-400" />
          <span>+1 (800) 123-4567</span>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center h-screen w-screen"
          >
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
              <X className="w-8 h-8" />
            </button>
            <ul className="flex flex-col space-y-6 text-2xl">
              {navItems.map(item => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-white hover:text-sky-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
