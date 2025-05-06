'use client'
import { Product } from "@/types/product";
import { useState } from "react";
import ContentLayout from "../ContentLayout";
import ProductCard from "../ui/ProductCard";
import ProductCardSlide from "../ui/ProductCardSlide";

const Bestsellers = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, thumbnail: "/image-test.jpg", title: 'Product A', price: 700 },
    { id: 2, thumbnail: "/image-test.jpg", title: 'Product B', price: 326.99, oldPrice: 450.30, isSale: true },
    { id: 3, thumbnail: "/image-test.jpg", title: 'Product C', price: 1500, oldPrice: 1700, isSale: true },
    { id: 4, thumbnail: "/image-test.jpg", title: 'Product D', price: 314 },
    { id: 5, thumbnail: "/image-test.jpg", title: 'Product E', price: 314 },
    { id: 6, thumbnail: "/image-test.jpg", title: 'Product F', price: 314 },
    { id: 7, thumbnail: "/image-test.jpg", title: 'Product G', price: 314 },
    { id: 8, thumbnail: "/image-test.jpg", title: 'Product H', price: 314 },
    { id: 9, thumbnail: "/image-test.jpg", title: 'Product I', price: 314 },
  ])

  return (
    <section className="bg-onyx">
      <ContentLayout height={80} className="flex flex-col justify-center">
        <h2 className="py-4 text-2xl font-bold">Best Sellers</h2>
        <div>
          <ProductCardSlide products={products} autoPlay />
        </div>
      </ContentLayout>
    </section>
  )
}

export default Bestsellers;