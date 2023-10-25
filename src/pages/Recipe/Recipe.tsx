import { FC } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import {
	useGetMyRecipeByIdQuery,
	useGetRecipeByIdQuery,
} from '../../store/api/api'
import styles from './Recipe.module.scss'
import Layout from '../../containers/Layout/Layout'
import Header from '../../components/Header/Header'

export const RecipeMain: FC<{ id: string }> = ({ id }) => {
	const location = useLocation()

	const isMyRecipePage = location.pathname.includes('myRecipe')

	const { data } = isMyRecipePage
		? useGetMyRecipeByIdQuery(id)
		: useGetRecipeByIdQuery(id)

	if (data === undefined) return

	const recipe = data[0]

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<img
					className={styles.image}
					src={recipe.image}
					alt='img'
					draggable={false}
				/>
				<div>
					<div className={styles.title}>{recipe.name}</div>
					<div className={styles.category}>{recipe.category}</div>
					<div className={styles.area}>{recipe.area}</div>
					<div className={styles.ingredients}>
						<span>Ingredients: </span>
						{recipe.ingredients.map(item => (
							<span key={item}>{item}</span>
						))}
					</div>
					{recipe.tags !== null && (
						<div className={styles.tags}>
							<span>Tags: </span>
							{recipe.tags.split(',').map(item => (
								<span key={item}>#{item}</span>
							))}
						</div>
					)}
				</div>
			</div>
			<div className={styles.describe}>{recipe.describe}</div>
		</div>
	)
}

const Recipe: FC = () => {
	const { id = '' } = useParams()
	return <Layout header={<Header />} main={<RecipeMain id={id} />} />
}

export default Recipe
