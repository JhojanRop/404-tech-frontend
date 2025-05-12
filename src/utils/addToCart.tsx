import { useState } from "react"

const useAddToCart = () => {
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        setQuantity(quantity + 1);
    };

    return { quantity, handleAddToCart };
};

export default useAddToCart;