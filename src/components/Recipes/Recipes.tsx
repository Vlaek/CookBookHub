import { ChangeEvent, FC, useState } from 'react'
import styles from './Recipes.module.scss'
import RecipeItem from '../RecipeItem/RecipeItem'
import { IRecipe } from '../../types/recipe.types'

interface RecipesProps {
	items: IRecipe[] | undefined
	isLoading: boolean
	queryTerm: string
	setQueryTerm: React.Dispatch<React.SetStateAction<string>>
}

const Recipes: FC<RecipesProps> = ({
	items,
	isLoading,
	queryTerm,
	setQueryTerm,
}) => {
	// const [searchTerm, setSearchTerm] = useState('')
	// const [queryTerm, setQueryTerm] = useState('')

	// const handleSearch = () => {
	// 	setQueryTerm(queryTerm)
	// }

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.title}>Recipes</div>
			</div>
			<div className={styles.main}>
				<div className={styles.search}>
					<input
						className={styles.input}
						type='search'
						value={queryTerm}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setQueryTerm(e.target.value)
						}
						placeholder={'Enter search term'}
					/>
					{/* <button className={styles.button} onClick={handleSearch}>
						Search
					</button> */}
				</div>
				<div className={styles.list}>
					{isLoading ? (
						<div className={styles.error}>Loading...</div>
					) : items ? (
						items.length === 0 ? (
							<div className={styles.error}>Recipes not found</div>
						) : (
							items.map((recipe: IRecipe) => (
								<RecipeItem key={recipe.id} recipe={recipe} />
							))
						)
					) : (
						<div className={styles.error}>Recipes not found</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Recipes
