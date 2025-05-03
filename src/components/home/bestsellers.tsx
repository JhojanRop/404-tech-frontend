'use client'
import { useState } from "react";
import ContentLayout from "../ContentLayout";
import Card from "../ui/Card";

interface BestsellersProps {
    onAddToCart: () => void;
}

const Bestsellers = ({ onAddToCart }: BestsellersProps) => {
    const [products,] = useState([
        { id: "A", image: "/image-test.jpg", title: 'Product A', price: 700, oldPrice: 0, isSale: false },
        { id: "B", image: "/image-test.jpg", title: 'Product B', price: 326.99, oldPrice: 450.30, isSale: true },
        { id: "C", image: "/image-test.jpg", title: 'Product C', price: 1500, oldPrice: 1700, isSale: true },
        { id: "D", image: "/image-test.jpg", title: 'Product D', price: 314, oldPrice: 0, isSale: false },
    ])

    return (
        <section className="bg-onyx">
            <ContentLayout height={80} className="flex flex-col justify-center">
                <h2 className="py-4 text-2xl font-bold">Best Sellers</h2>
                <div>
                    <div className="w-full flex justify-between">
                        {products.map(product => (
                            <Card key={product.id} 
                                image={product.image} 
                                title={product.title} 
                                sale={product.isSale} 
                                price={product.price.toLocaleString('es-ES')} 
                                onAddToCart={onAddToCart}
                            />
                        ))}
                    </div>
                </div>
            </ContentLayout>
        </section>
    )
}

export default Bestsellers;