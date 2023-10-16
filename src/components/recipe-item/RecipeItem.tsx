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
			<img src={recipe.image} alt='img' width={100} />
			<h2>{recipe.name}</h2>
			<button onClick={() => toggleFavorites(recipe)}>
				{isExists ? 'Romove from' : 'Add to'} favorites
			</button>
		</div>
	)
}

export default RecipeItem
