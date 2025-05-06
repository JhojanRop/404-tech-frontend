'use client'
import { Product } from "@/types/product";
import { useState } from "react";
import ContentLayout from "../ContentLayout";
import ProductCardSlide from "../ui/ProductCardSlide";

const Exclusive = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: "E", thumbnail: "/image-test.jpg", title: 'Product E', price: 850, oldPrice: 900, isSale: true },
    { id: "F", thumbnail: "/image-test.jpg", title: 'Product F', price: 500, oldPrice: 550, isSale: true },
    { id: "G", thumbnail: "/image-test.jpg", title: 'Product G', price: 1320, oldPrice: 1500, isSale: true },
    { id: "H", thumbnail: "/image-test.jpg", title: 'Product H', price: 650, oldPrice: 830, isSale: true },
  ])

  return (
    <section className="bg-onyx">
      <ContentLayout height={80} className="flex flex-col justify-center">
        <h2 className="py-4 text-2xl font-bold">Exclusive disccount</h2>
        <div>
          <ProductCardSlide products={products} autoPlay interval={3000} />
        </div>
      </ContentLayout>
    </section>
  )
}

export default Exclusive;