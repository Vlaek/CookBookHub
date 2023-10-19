import { useState } from 'react'
import Filter from '../../components/Filter/Filter'
import Header from '../../components/Header/Header'
import Recipes from '../../components/Recipes/Recipes'
import Layout from '../../containers/Layout/Layout'
import { useGetRecipesQuery } from '../../store/api/api'

function App() {
	const [queryTerm, setQueryTerm] = useState('')

	const { isLoading, data } = useGetRecipesQuery(queryTerm)

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
