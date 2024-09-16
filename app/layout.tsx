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
import LoadingSpinner from "@/components/ui/LoadingSpinnter";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathName = usePathname();
  const isAdminRoute = pathName.startsWith("/admin");
  const isAdminLoginRoute = pathName === "/admin/login";

  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const confirmed = localStorage.getItem("ageConfirmed") === "true";
    setAgeConfirmed(confirmed);
    setIsLoading(false);
  }, []);

  const handleAgeConfirmation = (confirmed: boolean) => {
    setAgeConfirmed(confirmed);
    localStorage.setItem("ageConfirmed", confirmed.toString());
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-white">
        <APIProvider
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
          onLoad={() => console.log("Maps API has loaded.")}
        >
          <ToasterProvider />
          {!isAdminLoginRoute && (isAdminRoute ? <AdminNavbar /> : <Navbar />)}
          <main className={"flex-grow bg-black w-full mx-auto"}>
            {isLoading && (
              <div className="w-screen h-screen flex justify-center items-center">
                <LoadingSpinner />
              </div>
            )}
            {!isLoading && ageConfirmed && children}
            {!isLoading && !ageConfirmed && <AgeConfirmationModal onConfirm={handleAgeConfirmation} />}
          </main>
          {!isAdminLoginRoute && <Footer />}
        </APIProvider>
      </body>
    </html>
  );
};

export default Layout;
