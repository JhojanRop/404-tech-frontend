import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Product } from "@/types/product";
import { useRef, useCallback, useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useWindowWidth } from "@/hooks/useWindowWidth";

interface ProductCardSlideProps {
  products: Product[];
  autoPlay?: boolean;
  interval?: number;
}

export default function ProductCardSlide({ products, autoPlay = false, interval = 5000 }: ProductCardSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { isMobile } = useWindowWidth();

  const minItemsForNavigation = useMemo(() => {
    return isMobile ? 2 : 4;
  }, [isMobile]);

  const checkScrollButtons = useCallback(() => {
    const container = containerRef.current;
    if (container && products.length > minItemsForNavigation) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    } else {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  }, [products.length, minItemsForNavigation]);

  const scroll = useCallback((direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth / (isMobile ? 2 : 4);
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  }, [isMobile]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      checkScrollButtons();
    }

    return () => {
      container?.removeEventListener('scroll', checkScrollButtons);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [checkScrollButtons]);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        if (!canScrollRight) {
          containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, canScrollRight, scroll]);

  const memoizedProducts = useMemo(() =>
    products.map((product) => (
      <div
        key={product.id}
        className="snap-start shrink-0 w-[calc(50%-8px)] md:w-[calc(25%-12px)] last:mr-0"
      >
        <ProductCard product={product} buyButton />
      </div>
    )), [products]);

  return (
    <div className="relative" role="region" aria-label="Productos destacados">
      {products.length > minItemsForNavigation && (
        <>
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Deslizar hacia la izquierda"
            >
              <ChevronLeftIcon className="h-5 w-5 text-black dark:text-white" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Deslizar hacia la derecha"
            >
              <ChevronRightIcon className="h-5 w-5 text-black dark:text-white" />
            </button>
          )}
        </>
      )}

      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-10 -mr-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {memoizedProducts}
      </div>
    </div>
  );
}
