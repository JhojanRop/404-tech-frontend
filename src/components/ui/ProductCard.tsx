import { Product } from "@/types/product";
import { StarIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  bordered?: boolean;
  reviews?: boolean;
  buyButton?: boolean;
  className?: string;
}

export default function ProductCard({ product, bordered = false, reviews = false, buyButton = false, className }: ProductCardProps) {
  return (
    <div key={product.id} className={"group relative text-foreground p-4 sm:p-6" + (bordered ? ' border-r border-b border-gray-200' : '') + (className ? ` ${className}` : '')}>
      <img
        alt={product.title}
        src={product.thumbnail}
        className={"aspect-square relative rounded-lg bg-gray-200 object-cover group-hover:opacity-75" + (product.isSale ? " after:content-['sale'] after:absolute after:top-0 after:left-0 after:bg-viridian-600 after:py-1 after:px-5 after:uppercase" : "")}
      />
      <div className="pt-10 pb-4 text-center">
        <h3 className="text-sm font-medium">
          <Link href={`/products/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.title}
          </Link>
        </h3>
        {reviews && (
          <div className="mt-3 flex flex-col items-center">
            <p className="sr-only">{product.rating} out of 5 stars</p>
            <div className="flex items-center justify-center gap-1">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  aria-hidden="true"
                  className={`${(product.rating ?? 0) > rating ? 'text-yellow-400' : 'text-gray-200'} size-5 shrink-0`}
                />
              ))}
              <p className="mt-1 text-sm text-foreground opacity-80">{product.rating}</p>
            </div>
          </div>
        )}
        <div className="mt-4 flex items-center justify-center gap-2">
          {product.oldPrice && (<p className="font-medium text-gray-500 line-through">${product.oldPrice.toLocaleString()}</p>)}
          <p className="font-medium text-foreground">${product.price.toLocaleString()}</p>
        </div>
      </div>
      {buyButton && (
        <Button className="w-full text-center py-1 [&>span]:w-full">Add to cart</Button>
      )}
    </div>
  )
}