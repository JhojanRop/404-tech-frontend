import React from "react";
import Button from "./Button";

interface CardProps {
    image: string;
    title: string;
    price: string;
    sale: boolean;
    onAddToCart?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, price, sale, onAddToCart }) => {
    return (
        <div className="flex flex-col items-center justify-center relative">
            {
                sale && <span className="absolute z-1 top-0 left-0 px-8 py-1 bg-viridian-600 text-sm">SALE</span>
            }
            <img src={image} alt={title} className="" />
            <h3 className="font-bold">{title}</h3>
            <p>{price}</p>
            <Button variant="classic" className="w-full" onClick={onAddToCart}>ADD TO CART</Button>
        </div>
    );
};

export default Card;