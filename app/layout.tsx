"use client";

import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AdminNavbar from "@/components/AdminNavbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathName = usePathname();
  const isAdminRoute = pathName.startsWith("/admin");
  const isAdminLoginRoute = pathName === "/admin/login";

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {!isAdminLoginRoute && (isAdminRoute ? <AdminNavbar /> : <Navbar />)}
        <main
          className={`flex-grow w-full mx-auto ${
            isAdminLoginRoute ? "" : "p-4"
          }`}
        >
          {children}
        </main>
        {!isAdminLoginRoute && <Footer />}
      </body>
    </html>
  );
};

export default Layout;
