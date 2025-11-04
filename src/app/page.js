
import Kids from "@/components/ kids";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Subscribe from "@/components/Subscribe";
import TopProducts from "@/components/TopProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <Products />
      <Kids />
      <TopProducts />
      <Subscribe />
      <Footer />
    </div>
  );
}
