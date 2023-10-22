import React from 'react'
import { useState } from 'react'
import { useCreateMyRecipeMutation } from '../../store/api/api'
import { IRecipeData } from '../../types/recipe.types'
import styles from './CreateRecipe.module.scss'

const defaultValue: IRecipeData = {
	name: '',
	image: '',
	describe: '',
	category: '',
	area: '',
	tags: null,
	ingredients: [],
}

const CreateRecipe = () => {
	const [recipe, setRecipe] = useState<IRecipeData>(defaultValue)

	const [createMyRecipe] = useCreateMyRecipeMutation()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createMyRecipe(recipe).then(() => setRecipe(defaultValue))
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.header}>
				<h1 className={styles.title}>Create New Recipe</h1>
			</div>
			<div className={styles.main}>
				<label className={styles.label}>
					<span>Name</span>
				</label>
				<input
					className={styles.input}
					type='text'
					placeholder='Enter name...'
					value={recipe.name}
					onChange={e => setRecipe({ ...recipe, name: e.target.value })}
				/>

				<label className={styles.label}>
					<span>Image</span>
				</label>
				<input
					className={styles.input}
					type='text'
					placeholder='Enter image...'
					value={recipe.image}
					onChange={e => setRecipe({ ...recipe, image: e.target.value })}
				/>

				<label className={styles.label}>
					<span>Describe</span>
				</label>
				<textarea
					className={styles.textarea}
					placeholder='Enter describe...'
					value={recipe.describe}
					onChange={e => setRecipe({ ...recipe, describe: e.target.value })}
				/>

				<label className={styles.label}>
					<span>Category</span>
				</label>
				<input
					className={styles.input}
					type='text'
					placeholder='Enter category...'
					value={recipe.category}
					onChange={e => setRecipe({ ...recipe, category: e.target.value })}
				/>

				<label className={styles.label}>
					<span>Area</span>
				</label>
				<input
					className={styles.input}
					type='text'
					placeholder='Enter area...'
					value={recipe.area}
					onChange={e => setRecipe({ ...recipe, area: e.target.value })}
				/>

				<label className={styles.label}>
					<span>Tags (e.g. "Vegan, Paella")</span>
				</label>
				<input
					className={styles.input}
					type='text'
					placeholder='Enter tags...'
					value={recipe.tags !== null ? recipe.tags.replace(/,+/g, ', ') : ''}
					onChange={e =>
						setRecipe({ ...recipe, tags: e.target.value.replace(/,\s+/g, ',') })
					}
				/>

				<label className={styles.label}>
					<span>Ingredients (e.g. "Salt, Rice")</span>
				</label>
				<input
					className={styles.input}
					type='text'
					placeholder='Enter ingredients...'
					value={recipe.ingredients.join(', ')}
					onChange={e =>
						setRecipe({ ...recipe, ingredients: e.target.value.split(', ') })
					}
				/>

				<button className={styles.button} type='submit'>
					Create
				</button>
			</div>
		</form>
	)
}

export default CreateRecipe
