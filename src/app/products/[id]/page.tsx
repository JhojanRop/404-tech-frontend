'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/types/product'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Radio,
  RadioGroup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { getProductById } from '@/lib/api/productsApi'
import { useParams } from 'next/navigation'

export default function ProductPage() {
  const [data, setData] = useState<Product | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    getProductById(id)
      .then((response: Product) => {
        setData(response)
        setIsLoading(false)
      })
      .catch((err: Error) => {
        setError(err)
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) return <p className="dark:text-foreground">Loading...</p>
  if (error) return <p className="dark:text-foreground">Error: {error.message}</p>
  if (!data) return <p className="dark:text-foreground">No product found</p>

  return (
    <div className="bg-background">
      <div className="flex gap-6 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="h-80 w-80 p-6 hover:scale-105 transition-transform duration-300">
                <img src={"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg"} alt={data.title} className='aspect-square ' />
              </TabList>
            </div>
          </TabGroup>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-foreground">{data.title}</h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900 dark:text-foreground">${data.price}</p>
          </div>

          {/* Reviews */}
          {data.rating !== undefined && (
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={(data.rating ?? 0) > rating ? 'text-viridian-500' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="sr-only dark:text-foreground">{data.rating} out of 5 stars</p>
              </div>
            </div>
          )}

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div
              dangerouslySetInnerHTML={{ __html: data.description || '' }}
              className="space-y-6 text-base text-gray-700 dark:text-foreground"
            />
          </div>

          <form className="mt-6">
            {/* Colors */}
            {data.category && (
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-foreground">Category</h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-foreground">{data.category}</p>
              </div>
            )}

            <div className="mt-10 flex">
              <button
                type="submit"
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-viridian-600 px-8 py-3 text-base font-medium text-white hover:bg-viridian-700 focus:ring-2 focus:ring-viridian-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden sm:w-full"
              >
                Add to bag
              </button>

              <button
                type="button"
                className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon aria-hidden="true" className="size-6 shrink-0" />
                <span className="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
