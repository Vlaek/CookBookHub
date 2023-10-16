export interface IRecipe {
	id: number
	name: string
	image: string
	describe: string
	category: string
	area: string
	tags: string | null
	ingredients: string[]
}

export interface IRecipeData extends Omit<IRecipe, 'id'> {}
