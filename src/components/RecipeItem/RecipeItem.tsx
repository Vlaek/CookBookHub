import styles from './RecipeItem.module.css'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IRecipe } from '../../types/recipe.types'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	useCreateFavoritesMutation,
	useDeleteFavoritesMutation,
	useGetFavoritesByIdQuery,
	useGetFavoritesQuery,
} from '../../store/api/api'
import useDebounce from '../../hooks/useDebounce'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface IRecipeItem {
	recipe: IRecipe
}

const RecipeItem: FC<IRecipeItem> = ({ recipe }) => {
	const { data } = useGetFavoritesByIdQuery(recipe.id)

	const { toggleFavorites } = useActions()

	const isExists = data?.some(r => r.id === recipe.id)

	useEffect(() => {}, [isExists])

	const navigate = useNavigate()

	const [createFavorites] = useCreateFavoritesMutation()
	const [deleteFavorites] = useDeleteFavoritesMutation()

	return (
		<div className={styles.item}>
			<img
				className={styles.image}
				src={recipe.image}
				alt='img'
				draggable={false}
				onClick={() => navigate('/CookBookHub/recipe/' + recipe.id)}
			/>
			<div className={styles.info}>
				<h2 onClick={() => navigate('/CookBookHub/recipe/' + recipe.id)}>
					{recipe.name}
				</h2>
				<h3>{recipe.area}</h3>
				<h4>{recipe.category}</h4>
				<button
					className={styles.button}
					onClick={() => {
						toggleFavorites(recipe)
						isExists ? deleteFavorites(recipe.id) : createFavorites(recipe)
					}}
				>
					{isExists ? 'Remove from' : 'Add to'} favorites
				</button>
			</div>
		</div>
	)
}

export default RecipeItem
