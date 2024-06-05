import Hero from "@/components/ui/Hero";
import About from "@/components/home/About";
import LatestProducts from "@/components/home/LatestProducts";
import VideoCTA from "@/components/home/VideoCTA";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <LatestProducts />
        <VideoCTA />
        <About />
      </div>
    </>
  );
}
