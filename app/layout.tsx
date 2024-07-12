"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import AdminNavbar from "@/components/ui/AdminNavbar";
import Footer from "@/components/ui/Footer";
import { usePathname } from "next/navigation";
import { ToasterProvider } from "@/providers/toast-provider";
import { APIProvider } from "@vis.gl/react-google-maps";
import AgeConfirmationModal from "@/components/age-restriction/AgeRestrictionModal";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathName = usePathname();
  const isAdminRoute = pathName.startsWith("/admin");
  const isAdminLoginRoute = pathName === "/admin/login";

    const [ageConfirmed, setAgeConfirmed] = useState(false);

  useEffect(() => {
    const confirmed = localStorage.getItem("ageConfirmed") === "true";
    setAgeConfirmed(confirmed);
  }, []);

  const handleAgeConfirmation = (confirmed: boolean) => {
    setAgeConfirmed(confirmed);
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <APIProvider
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
          onLoad={() => console.log("Maps API has loaded.")}
        >
          <ToasterProvider />
          {!isAdminLoginRoute && (isAdminRoute ? <AdminNavbar /> : <Navbar />)}
          <main
            className={"flex-grow w-full mx-auto"}
          >
            {!ageConfirmed ? <AgeConfirmationModal onConfirm={handleAgeConfirmation} /> : children}
          </main>
          {!isAdminLoginRoute && <Footer />}
        </APIProvider>
      </body>
    </html>
  );
};

export default Layout;
