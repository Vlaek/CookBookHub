import React, { useState } from 'react'
import CreateRecipe from '../../components/create-recipe/CreateRecipe'
import Header from '../../components/header/Header'
import RecipeItem from '../../components/recipe-item/RecipeItem'
import { useGetCategoriesQuery, useGetRecipesQuery } from '../../store/api/api'
// import User from './components/user/User'
import { IRecipe } from '../../types/recipe.types'
import styles from './Main.module.scss'

function App() {
	const [searchTerm, setSearchTerm] = useState('')
	const [queryTerm, setQueryTerm] = useState('')

	const { isLoading, data } = useGetRecipesQuery(queryTerm)

	const handleSearch = () => {
		setQueryTerm(searchTerm)
	}

	const { isLoading: isLoadingCategory, data: dataCategory } =
		useGetCategoriesQuery('')

	return (
		<section>
			<Header />
			<div>
				{isLoadingCategory ? (
					<div>Loading...</div>
				) : (
					dataCategory && dataCategory.map(item => <div>{item.category}</div>)
				)}
			</div>
			{/* <User /> */}
			<CreateRecipe />
			<div style={{ padding: 10 }}>
				<p>If you wanna find:</p>
				<div>
					<input
						type='search'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						placeholder={'Enter search term'}
					/>
					<button onClick={handleSearch}>Search</button>
				</div>
			</div>
			<div>
				{isLoading ? (
					<div>Loading...</div>
				) : data ? (
					data.map((recipe: IRecipe) => (
						<RecipeItem key={recipe.id} recipe={recipe} />
					))
				) : (
					<div>RECIPES NOT FOUND</div>
				)}
			</div>
		</section>
	)
}

export default App
