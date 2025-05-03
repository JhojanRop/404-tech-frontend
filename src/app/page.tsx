'use client';
// Importo componentes del Home
import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Bestsellers from "@/components/home/bestsellers";
import Newsletter from "@/components/home/newsletter";
import Exclusive from "@/components/home/exclusivediscounts";
import Brands from "@/components/home/brands";
import Footer from "@/components/home/footer";
// Importo funciones de react
import { useState } from "react";

export default function Home() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddToCart = () => setCartQuantity(cartQuantity + 1);

  return (
    <div>
      <Navbar cartQuantity={cartQuantity} />
      <Hero />
      <Bestsellers onAddToCart={handleAddToCart} />
      <Newsletter />
      <Exclusive onAddToCart={handleAddToCart} />
      <Brands />
      <Footer />
    </div>
  );
}
