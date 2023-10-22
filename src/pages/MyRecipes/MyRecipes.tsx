import { FC, useState } from 'react'
import Layout from '../../containers/Layout/Layout'
import Header from '../../components/Header/Header'
import CreateRecipe from '../../components/CreateRecipe/CreateRecipe'
import styles from './MyRecipes.module.scss'
import Recipes from '../../components/Recipes/Recipes'
import { useGetMyRecipesQuery } from '../../store/api/api'
import useDebounce from '../../hooks/useDebounce'

const Main: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.title}>My Recipes</div>
			</div>
		</div>
	)
}

const MyRecipes: FC = () => {
	const [queryTerm, setQueryTerm] = useState('')

	const debouncedQuery = useDebounce(queryTerm, 500)

	const { data, isLoading } = useGetMyRecipesQuery(debouncedQuery)

	return (
		<Layout
			header={<Header />}
			aside={<CreateRecipe />}
			main={
				<Recipes
					title={'My Recipes'}
					items={data}
					isLoading={isLoading}
					queryTerm={queryTerm}
					setQueryTerm={setQueryTerm}
					url={'myRecipe'}
				/>
			}
		/>
	)
}

export default MyRecipes
