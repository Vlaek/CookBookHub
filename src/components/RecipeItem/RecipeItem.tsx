import styles from './RecipeItem.module.css'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IRecipe } from '../../types/recipe.types'
import React, { FC } from 'react'

interface IRecipeItem {
	recipe: IRecipe
}

const RecipeItem: FC<IRecipeItem> = ({ recipe }) => {
	const { favorites } = useFavorites()

	const { toggleFavorites } = useActions()

	const isExists = favorites.some(r => r.id === recipe.id)

	return (
		<div className={styles.item}>
			<img
				className={styles.image}
				src={recipe.image}
				alt='img'
				draggable={false}
			/>
			<div className={styles.info}>
				<h2>{recipe.name}</h2>
				<h3>{recipe.area}</h3>
				<h4>{recipe.category}</h4>
				<button
					className={styles.button}
					onClick={() => toggleFavorites(recipe)}
				>
					{isExists ? 'Romove from' : 'Add to'} favorites
				</button>
			</div>
		</div>
	)
}

export default RecipeItem
