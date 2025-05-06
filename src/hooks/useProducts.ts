import { useEffect, useState } from 'react'

interface Product {
  id: number
  title: string
  price: number
  rating: number
  thumbnail: string
}


export function useProducts(getProducts: (page: number, limit: number) => Promise<any>, limit = 15) {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [pagesCount, setPagesCount] = useState(0)

  useEffect(() => {
    getProducts(page, limit).then(data => {
      setProducts(data.products)
      setPagesCount(Math.ceil(data.total / data.limit))
    })
  }, [page, getProducts, limit])



  return { products, page, setPage, pagesCount }
}
