import { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter'
import Header from '../../components/Header/Header'
import Recipes from '../../components/Recipes/Recipes'
import Layout from '../../containers/Layout/Layout'
import { useFavorites } from '../../hooks/useFavorites'
import { IFilter } from '../../types/filter.types'
import { useFilter } from '../../hooks/useFilter'
import { useGetFavoritesQuery } from '../../store/api/api'
import useDebounce from '../../hooks/useDebounce'
import { useTypedSelector } from '../../hooks/useTypedSelector'

function Favorites() {
	const [queryTerm, setQueryTerm] = useState('')

	const debouncedQuery = useDebounce(queryTerm, 500)

	const { filter } = useTypedSelector(state => state)

	const { data, isLoading } = useGetFavoritesQuery({
		searchTerm: debouncedQuery,
		sortOrder: filter.sort,
		setFilter: filter.filter,
	})

	return (
		<Layout
			header={<Header />}
			aside={<Filter />}
			main={
				<Recipes
					title={'Favorites'}
					items={data}
					isLoading={isLoading}
					queryTerm={queryTerm}
					setQueryTerm={setQueryTerm}
				/>
			}
		/>
	)
}

export default Favorites
