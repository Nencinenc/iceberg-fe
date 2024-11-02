import React from "react";
import Hero from "@/components/ui/Hero";
import About from "@/components/home/About";
import VideoCTA from "@/components/home/VideoCTA";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <FeaturedProducts />
      <VideoCTA />
      <About />
    </div>
  );
}
