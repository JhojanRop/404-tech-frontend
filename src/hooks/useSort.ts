import { useState } from 'react'

const sortOptions = [
  { name: 'Most Popular', value: 'popular' },
  { name: 'Best Rating', value: 'rating' },
  { name: 'Newest', value: 'newest' },
]

export function useSort() {
  const [currentSort, setCurrentSort] = useState('popular')

  const handleSort = (value: string) => {
    setCurrentSort(value)
    // Puedes aquí aplicar lógica para ordenamiento si se hace del lado cliente
  }

  return {
    sortOptions,
    currentSort,
    handleSort,
  }
}
