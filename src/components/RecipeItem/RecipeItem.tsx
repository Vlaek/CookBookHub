import styles from './RecipeItem.module.scss'
import { RiDeleteBinFill } from 'react-icons/ri'
import { useActions } from '../../hooks/useActions'
import { IRecipe } from '../../types/recipe.types'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	useCreateFavoritesMutation,
	useDeleteFavoritesMutation,
	useDeleteMyRecipeMutation,
	useGetFavoritesByIdQuery,
} from '../../store/api/api'

interface IRecipeItem {
	recipe: IRecipe
	url: string
}

const RecipeItem: FC<IRecipeItem> = ({ recipe, url }) => {
	const { data } = useGetFavoritesByIdQuery(recipe.id)

	const { toggleFavorites } = useActions()

	const isExists = data?.some(r => r.id === recipe.id)

	useEffect(() => {}, [isExists])

	const isMyRecipePage = location.pathname.includes('my-recipes')

	const navigate = useNavigate()

	const [createFavorites] = useCreateFavoritesMutation()
	const [deleteFavorites] = useDeleteFavoritesMutation()
	const [deleteMyRecipe] = useDeleteMyRecipeMutation()

	return (
		<div className={styles.item}>
			<img
				className={styles.image}
				src={recipe.image}
				alt='img'
				draggable={false}
				onClick={() => navigate(`/CookBookHub/${url}/` + recipe.id)}
			/>
			<div className={styles.info}>
				<h2 onClick={() => navigate(`/CookBookHub/${url}/` + recipe.id)}>
					{recipe.name}
				</h2>
				<h3>{recipe.area}</h3>
				<h4>{recipe.category}</h4>
				{isMyRecipePage ? (
					<>
						<button
							className={styles.button}
							onClick={() => navigate('/CookBookHub/myRecipeEdit/' + recipe.id)}
						>
							Edit Recipe
						</button>
						<RiDeleteBinFill
							className={styles.btn_del}
							onClick={() => deleteMyRecipe(recipe.id)}
						/>
					</>
				) : (
					<button
						className={styles.button}
						onClick={() => {
							toggleFavorites(recipe)
							isExists ? deleteFavorites(recipe.id) : createFavorites(recipe)
						}}
					>
						{isExists ? 'Remove from' : 'Add to'} favorites
					</button>
				)}
			</div>
		</div>
	)
}

export default RecipeItem
