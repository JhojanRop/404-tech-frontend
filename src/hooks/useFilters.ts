import { useState, useEffect } from "react";

type FilterOption = {
  value: string
  label: string
  checked: boolean
}
type Filters = {
  price: FilterOption[]
  color: FilterOption[]
  size: FilterOption[]
  category: FilterOption[]
}

export function useFilters(initialFilters: Filters) {
  const [filters, setFilters] = useState(initialFilters)
  const [filtersCount, setFiltersCount] = useState(0)

  useEffect(() => {
    const count = Object.values(filters).flat().filter(option => option.checked).length
    setFiltersCount(count)
  }, [filters])

  const handleFilterChange = (filterKey: keyof Filters, option: string) => {
    const updated = filters[filterKey].map(opt =>
      opt.value === option ? { ...opt, checked: !opt.checked } : opt
    )
    setFilters(prev => ({ ...prev, [filterKey]: updated }))
  }

  const handleClearFilters = () => {
    const cleared = Object.fromEntries(
      Object.entries(filters).map(([key, options]) => [
        key,
        options.map(option => ({ ...option, checked: false })),
      ])
    ) as Filters
    setFilters(cleared)
  }

  return {
    filters,
    filtersCount,
    handleFilterChange,
    handleClearFilters,
  }
}