'use client'
import { useState } from "react";
import ContentLayout from "../ContentLayout";
import Card from "../ui/Card";

const Exclusive = () => {
    const [products, setProducts] = useState([
        { id: "E", image: "/image-test.jpg", title: 'Product E', price: 850, oldPrice: 900, isSale: true },
        { id: "F", image: "/image-test.jpg", title: 'Product F', price: 500, oldPrice: 550, isSale: true },
        { id: "G", image: "/image-test.jpg", title: 'Product G', price: 1320, oldPrice: 1500, isSale: true },
        { id: "H", image: "/image-test.jpg", title: 'Product H', price: 650, oldPrice: 830, isSale: true },
    ])

    return (
        <section className="bg-onyx">
            <ContentLayout height={80} className="flex flex-col justify-center">
                <h2 className="py-4 text-2xl font-bold">Exclusive disccount</h2>
                <div>
                    <div className="w-full flex justify-between">
                        {products.map(product => (
                            <Card key={product.id} image={product.image} title={product.title} sale={product.isSale} price={product.price.toLocaleString('es-ES')} />
                        ))}
                    </div>
                </div>
            </ContentLayout>
        </section>
    )
}

export default Exclusive;