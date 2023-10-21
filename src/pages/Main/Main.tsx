import { useState } from 'react'
import Filter from '../../components/Filter/Filter'
import Header from '../../components/Header/Header'
import Recipes from '../../components/Recipes/Recipes'
import Layout from '../../containers/Layout/Layout'
import { useGetRecipesQuery } from '../../store/api/api'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import useDebounce from '../../hooks/useDebounce'

function App() {
	const [queryTerm, setQueryTerm] = useState('')

	const debouncedQuery = useDebounce(queryTerm, 500)

	const { filter } = useTypedSelector(state => state)

	const { isLoading, data } = useGetRecipesQuery({
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
					title={'Recipes'}
					items={data}
					isLoading={isLoading}
					queryTerm={queryTerm}
					setQueryTerm={setQueryTerm}
				/>
			}
		/>
	)
}

export default App
