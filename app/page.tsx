import About from "@/components/about";
import Categorysection from "@/components/categorysection";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import HeroSlider from "@/components/heroslider";
import Navbar from "@/components/Navbar";
import ShopByPrice from "@/components/shopbyprice";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar/>
      <HeroSlider/>
      <Hero/>
      <Categorysection/>
      <ShopByPrice/>
      <About/>
      <Footer/>
      </div>
  );
}
