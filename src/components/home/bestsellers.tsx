'use client'
import { Product } from "@/types/product";
import { useState } from "react";
import ContentLayout from "../ContentLayout";
import ProductCard from "../ui/ProductCard";

const Bestsellers = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, thumbnail: "/image-test.jpg", title: 'Product A', price: 700 },
    { id: 2, thumbnail: "/image-test.jpg", title: 'Product B', price: 326.99, oldPrice: 450.30, isSale: true },
    { id: 3, thumbnail: "/image-test.jpg", title: 'Product C', price: 1500, oldPrice: 1700, isSale: true },
    { id: 4, thumbnail: "/image-test.jpg", title: 'Product D', price: 314 },
  ])

  return (
    <section className="bg-onyx">
      <ContentLayout height={80} className="flex flex-col justify-center">
        <h2 className="py-4 text-2xl font-bold">Best Sellers</h2>
        <div>
          <div className="w-full flex justify-between">
            {products.map(product => (
              <ProductCard key={product.id} product={product} buyButton />
            ))}
          </div>
        </div>
      </ContentLayout>
    </section>
  )
}

export default Bestsellers;