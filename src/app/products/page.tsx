'use client'

import { ChevronDownIcon, FunnelIcon, StarIcon } from "@heroicons/react/24/solid"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { generatePaginationArray } from "@/utils/pagination"
import { getProducts } from "@/lib/api/productsApi"
import { useFilters } from "@/hooks/useFilters"
import { useProducts } from "@/hooks/useProducts"
import { useSort } from "@/hooks/useSort"
import ContentLayout from "@/components/ContentLayout"
import Link from "next/link"
import SkeletonProduct from "@/components/ui/skeletonproducts"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const initialFilters = {
  price: [
    { value: '0', label: '$0 - $25', checked: false },
    { value: '25', label: '$25 - $50', checked: false },
    { value: '50', label: '$50 - $75', checked: false },
    { value: '75', label: '$75+', checked: false },
  ],
  color: [
    { value: 'white', label: 'White', checked: false },
    { value: 'beige', label: 'Beige', checked: false },
    { value: 'blue', label: 'Blue', checked: true },
    { value: 'brown', label: 'Brown', checked: true },
    { value: 'green', label: 'Green', checked: false },
    { value: 'purple', label: 'Purple', checked: true },
  ],
  size: [
    { value: 'xs', label: 'XS', checked: false },
    { value: 's', label: 'S', checked: true },
    { value: 'm', label: 'M', checked: false },
    { value: 'l', label: 'L', checked: false },
    { value: 'xl', label: 'XL', checked: false },
    { value: '2xl', label: '2XL', checked: false },
  ],
  category: [
    { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
    { value: 'tees', label: 'Tees', checked: false },
    { value: 'objects', label: 'Objects', checked: false },
    { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
    { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
  ],
}

export default function ProductsPage() {
  const { filters, filtersCount, handleFilterChange, handleClearFilters } = useFilters(initialFilters)
  const { products, page, setPage, pagesCount, loading } = useProducts(getProducts)
  const { currentSort, sortOptions, handleSort } = useSort()

  return (
    <main>
      <ContentLayout className="pb-10">
        <header className="bg-background">
          <Disclosure
            as="section"
            aria-labelledby="filter-heading"
            className="grid items-center border-t border-b border-gray-200"
          >
            <h2 id="filter-heading" className="sr-only">
              Filters
            </h2>
            <div className="relative col-start-1 row-start-1 py-4">
              <div className="mx-auto flex max-w-7xl divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
                <div className="pr-6">
                  <DisclosureButton className="group flex items-center font-medium text-foreground hover:opacity-80 cursor-pointer">
                    <FunnelIcon
                      aria-hidden="true"
                      className="mr-2 size-5 flex-none text-gray-400 dark:text-foreground group-hover:text-gray-500 group-hover:dark:opacity-80"
                    />
                    {filtersCount} Filters
                  </DisclosureButton>
                </div>
                <div className="pl-6">
                  <button type="button" onClick={handleClearFilters} className="text-gray-500 dark:text-foreground hover:opacity-80 cursor-pointer">
                    Clear all
                  </button>
                </div>
              </div>
            </div>
            <DisclosurePanel className="border-t border-gray-200 py-5 md:py-10">
              <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 md:grid-cols-4 lg:px-8">
                {Object.entries(filters).map((filter) => (
                  <fieldset key={filter[0]} className="col-span-2 md:col-span-1 my-3 md:my-0">
                    <legend className="block font-semibold">{filter[0].charAt(0).toUpperCase() + filter[0].slice(1)}</legend>
                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                      {filter[1].map((option: any, optionIdx: number) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`${filter[0]}-${optionIdx}`}
                                name={`${filter[0]}[]`}
                                type="checkbox"
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-viridian-600 checked:bg-viridian-600 indeterminate:border-viridian-600 indeterminate:bg-viridian-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-viridian-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                onChange={() => handleFilterChange(filter[0] as keyof typeof filters, option.value)}
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label htmlFor={`${filter[0]}-${optionIdx}`} className="text-base text-gray-600 dark:text-foreground dark:hover:opacity-80 sm:text-sm cursor-pointer">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                ))}
              </div>
            </DisclosurePanel>
            <div className="col-start-1 row-start-1 py-4">
              <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                <Menu as="div" className="relative inline-block">
                  <div className="flex">
                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 dark:text-foreground dark:hover:text-foreground dark:hover:opacity-90 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 dark:text-foreground group-hover:text-gray-500"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          <button
                            onClick={() => handleSort(option.value)}
                            className={classNames(
                              currentSort === option.value ? 'font-medium text-gray-900' : 'text-gray-500',
                              'block w-full text-left px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden'
                            )}
                          >
                            {option.name}
                          </button>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </Disclosure>
        </header>


        <div className="bg-background">
          <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8 text-foreground">
            <h2 className="sr-only text-foreground">Products</h2>
            <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
              {!loading && products.map((product) => (
                <div key={product.id} className="group relative text-foreground border-r border-b border-gray-200 p-4 sm:p-6">
                  <img
                    alt={product.title}
                    src={product.thumbnail}
                    className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                  />
                  <div className="pt-10 pb-4 text-center">
                    <h3 className="text-sm font-medium">
                      <Link href={`/products/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    </h3>
                    <div className="mt-3 flex flex-col items-center">
                      <p className="sr-only">{product.rating} out of 5 stars</p>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                              product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                              'size-5 shrink-0',
                            )}
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-foreground opacity-80">{product.rating} reviews</p>
                    </div>
                    <p className="mt-4 text-base font-medium text-foreground">${product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
              {loading && Array.from({ length: 4 }, (_, index) => (
                <SkeletonProduct key={index} />
              ))}
            </div>
          </div>
        </div>

        <nav aria-label="Pagination" className="w-full mx-auto mt-10 flex max-w-7xl justify-between text-sm font-medium text-gray-700 dark:text-foreground">
          <div className="min-w-0 flex-1">
            <button onClick={() => page > 1 && setPage(prev => prev - 1)} className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-background text-foreground px-4 hover:bg-viridian-700 hover:border-viridian-700 focus:border-viridian-700 focus:ring-2 focus:ring-viridan-600/25 focus:ring-offset-1 focus:ring-offset-viridan-600 focus:outline-hidden cursor-pointer">Previous</button>
          </div>
          <div className="hidden space-x-2 sm:flex">
            {generatePaginationArray(page, pagesCount).map((pageNumber, index) => (
              <button
                key={index}
                onClick={() => typeof pageNumber === 'number' && setPage(pageNumber)}
                disabled={typeof pageNumber === 'string'}
                className={classNames(
                  'inline-flex h-10 items-center rounded-md border px-4 focus:outline-hidden',
                  typeof pageNumber === 'string'
                    ? 'border-transparent cursor-default'
                    : 'border-gray-300 hover:bg-viridian-600 hover:border-viridian-800 focus:border-viridian-700 focus:ring-2 focus:ring-viridian-600/25 focus:ring-offset-1 focus:ring-offset-viridian-600',
                  pageNumber === page
                    ? 'bg-viridian-600 border-viridian-800 text-white'
                    : 'bg-transparent'
                )}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <div className="flex min-w-0 flex-1 justify-end">
            <button onClick={() => page < pagesCount && setPage(prev => prev + 1)} className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-background text-foreground px-4 hover:bg-viridian-700 hover:border-viridian-700 focus:border-viridian-700 focus:ring-2 focus:ring-viridan-600/25 focus:ring-offset-1 focus:ring-offset-viridan-600 focus:outline-hidden cursor-pointer">Next</button>
          </div>
        </nav>
      </ContentLayout>
    </main>
  )
}