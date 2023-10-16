export interface IRecipe {
	id: number
	name: string
	image: string
}

export interface IRecipeData extends Omit<IRecipe, 'id'> {}
