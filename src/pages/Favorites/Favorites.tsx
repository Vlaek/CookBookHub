import { useState } from 'react'
import Filter from '../../components/Filter/Filter'
import Header from '../../components/Header/Header'
import Recipes from '../../components/Recipes/Recipes'
import Layout from '../../containers/Layout/Layout'
import { useFavorites } from '../../hooks/useFavorites'

function Favorites() {
	const [queryTerm, setQueryTerm] = useState('')

	const { favorites } = useFavorites()

	return (
		<Layout
			header={<Header />}
			aside={<Filter />}
			main={
				<Recipes
					items={favorites}
					isLoading={false}
					queryTerm={queryTerm}
					setQueryTerm={setQueryTerm}
				/>
			}
		/>
	)
}

export default Favorites
