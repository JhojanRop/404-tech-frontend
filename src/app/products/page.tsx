'use client'

import ContentLayout from "@/components/ContentLayout"
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Product {
  id: number
  title: string
  price: number
  rating: number
  thumbnail: string
}

export default function ProductsPage() {
  const [filters, setFilters] = useState([])
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [pagesCount, setPagesCount] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://dummyjson.com/products/category/laptops?limit=12&skip=${(page - 1) * 12}`, { next: { revalidate: 60 } })
      const data = await res.json()
      setProducts(data.products)
      setPagesCount(Math.ceil(data.total / 12))
    }

    fetchProducts()
  }, [page])

  return (
    <main>
      <ContentLayout className="pb-10">
        <header className="py-4 flex justify-between border-y border-e-gray-300 text-sm [&>button]:cursor-pointer [&>div>button]:cursor-pointer">
          <div className="">
            <button className="px-4">{<FunnelIcon width={16} className="inline" />} {filters.length} Filters</button>
            <button className="px-4 border-l" onClick={() => setFilters([])}>Clear all</button>
          </div>
          <button>Sort {<ChevronDownIcon width={16} className="inline" />}</button>
        </header>


        <section className="-mx-px my-3 px-4 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map(product => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="border border-white">
                <div className="group relative border-r border-b border-gray-200 p-4 sm:p-6">
                  <img src={product.thumbnail} alt={product.title} className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75" />
                  <div className="pt-10 pb-4 text-center">
                    <h3 className="text-sm font-medium text-white">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {product.title}
                    </h3>
                    <div className="mt-3 flex flex-col items-center">
                      <p className="sr-only">5 out of 5 stars</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <svg key={index} className={`h-5 w-5 ${index < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 15.27L16.18 20l-1.64-7.03L19 9.24l-7.19-.61L10 2 8.19 8.63 1 9.24l5.46 3.73L5.82 20z" />
                          </svg>
                        ))}

                      </div>
                    </div>
                    <p className="mt-4 text-base font-medium text-white">${product.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <nav aria-label="Pagination" className="w-full mx-auto mt-10 flex max-w-7xl justify-between text-sm font-medium text-gray-700">
          <div className="min-w-0 flex-1">
            <button onClick={() => page > 1 && setPage(prev => prev - 1)} className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-viridian-700 focus:ring-2 focus:ring-viridan-600/25 focus:ring-offset-1 focus:ring-offset-viridan-600 focus:outline-hidden">Previous</button>
          </div>
          <div className="hidden space-x-2 sm:flex">
            {[...Array(pagesCount)]?.map((_, index) => (
              <button key={index} onClick={() => setPage(index + 1)} className={`inline-flex text-white h-10 items-center rounded-md border border-gray-300 bg-transparent px-4 hover:bg-viridian-600 hover:border-viridian-800 focus:border-viridian-700 focus:ring-2 focus:ring-indigo-600/25 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:outline-hidden ${page === index + 1 ? 'bg-viridian-600 border-viridian-800' : ''}`}>
                {index + 1}
              </button>
            ))}
          </div>
          <div className="flex min-w-0 flex-1 justify-end">
            <button onClick={() => page < pagesCount && setPage(prev => prev + 1)} className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-viridian-700 focus:ring-2 focus:ring-indigo-600/25 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:outline-hidden">Next</button>
          </div>
        </nav>
      </ContentLayout>
    </main>
  )
}