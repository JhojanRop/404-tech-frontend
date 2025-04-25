// Importo componentes del Home
import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Bestsellers from "@/components/home/bestsellers";
import Newsletter from "@/components/home/newsletter";
import Exclusive from "@/components/home/exclusivediscounts";
import Brands from "@/components/home/brands";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bestsellers />
      <Newsletter />
      <Exclusive />
      <Brands />
      <Footer />
    </>
  );
}
