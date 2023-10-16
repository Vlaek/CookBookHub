import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipe, IRecipeData } from '../../types/recipe.types'

const API_URL = 'http://localhost:3000/recipes'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Recipe'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({
		getRecipes: builder.query<IRecipe[], string>({
			query: searchTerm => `/?_sort=id&_order=desc&q=${searchTerm}`,
			providesTags: (result, error, searchTerm) => [
				{
					type: 'Recipe',
					id: searchTerm,
				},
			],
		}),
		createRecipe: builder.mutation<null, IRecipeData>({
			query: recipe => ({
				body: recipe,
				url: '/',
				method: 'POST',
			}),
			invalidatesTags: () => [
				{
					type: 'Recipe',
				},
			],
		}),
	}),
})

export const { useGetRecipesQuery, useCreateRecipeMutation } = api
