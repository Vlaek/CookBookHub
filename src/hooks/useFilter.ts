import { useState, useCallback, useEffect } from 'react'
import { IRecipe } from '../types/recipe.types'
import { IFilter } from '../types/filter.types'
import useDebounce from './useDebounce'

export const useFilter = (recipes: IRecipe[], filter: IFilter) => {
	const [items, setItems] = useState<IRecipe[]>(recipes)

	const debouncedQuery = useDebounce(filter.query, 500)

	const applyFilters = useCallback(() => {
		let filteredItems = [...items]

		if (debouncedQuery) {
			filteredItems = filteredItems.filter(item =>
				item.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
			)
		}

		return filteredItems
	}, [debouncedQuery])

	useEffect(() => {
		const filteredTracks = applyFilters()
		setItems(filteredTracks)
	}, [applyFilters])

	return items
}
