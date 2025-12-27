import About from "@/components/about";
import Categorysection from "@/components/categorysection";
import Hero from "@/components/hero";
import HeroSlider from "@/components/heroslider";
import Navbar from "@/components/Navbar";
import ShopByPrice from "@/components/shopbyprice";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSlider/>
      <Hero/>
      <Categorysection/>
      <ShopByPrice/>
      <About/>

      </div>
  );
}
