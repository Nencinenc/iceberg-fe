"use client";

import { faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo_volk.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 border-b border-sky-500 bg-black  p-4`}
    >
      <nav className="container mx-auto flex justify-between items-center py-2">
        <div className="text-lg font-bold">
          <a href="/">
            <Image src={Logo} width={120} height={100} alt="Logo" />
          </a>
        </div>
        <ul className="hidden md:flex space-x-4 justify-center text-lg flex-grow">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Начало
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-400">
              Никотинови паучове
            </Link>
          </li>
          <li>
            <Link href="/locations" className="hover:text-gray-400">
              Локации
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="hover:text-gray-400">
              Контакти
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center space-x-2 text-md">
          <FontAwesomeIcon icon={faPhone} className="text-sky-400 w-4 h-4 m-0 p-0" />
          <span>+1 (800) 123-4567</span>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className=" text-4xl" />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 text-center z-50 flex flex-col items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FontAwesomeIcon icon={faTimes} className=" w-8 h-8" />
          </button>
          <ul className="flex flex-col space-y-6  text-2xl">
            <li>
              <Link href="/" onClick={toggleMenu} className="hover:text-gray-400">
                Начало
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={toggleMenu} className="hover:text-gray-400">
                Никотинови паучове
              </Link>
            </li>
            <li>
              <Link href="/locations" onClick={toggleMenu} className="hover:text-gray-400">
                Локации
              </Link>
            </li>
            <li>
              <Link href="/contacts" onClick={toggleMenu} className="hover:text-gray-400">
                Контакти
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
