import React from 'react'
import { useState } from 'react'
import { useCreateRecipeMutation } from '../../store/api/api'
import { IRecipeData } from '../../types/recipe.types'

const defaultValue: IRecipeData = {
	name: '',
	image: '',
}

const CreateRecipe = () => {
	const [recipe, setRecipe] = useState<IRecipeData>(defaultValue)

	const [createRecipe] = useCreateRecipeMutation()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(recipe)
		createRecipe(recipe).then(() => setRecipe(defaultValue))
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<p>Create new recipe:</p>
				<label>
					<input
						type='text'
						placeholder='Name'
						value={recipe.name}
						onChange={e => setRecipe({ ...recipe, name: e.target.value })}
					/>
				</label>
				<label>
					<input
						type='text'
						placeholder='Image'
						value={recipe.image}
						onChange={e => setRecipe({ ...recipe, image: e.target.value })}
					/>
				</label>
				<button type='submit'>Create</button>
			</form>
		</div>
	)
}

export default CreateRecipe
