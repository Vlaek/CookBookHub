import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArea } from '../../types/areas.types'
import { ICategory } from '../../types/categories.types'
import { IRecipe, IRecipeData } from '../../types/recipe.types'

const API_URL = 'http://localhost:3000'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Recipes', 'Recipe', 'Category', 'Area'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({
		getRecipes: builder.query<
			IRecipe[],
			{ searchTerm: string; sortOrder: string; setFilter: string }
		>({
			query: ({ searchTerm, sortOrder, setFilter }) =>
				`/recipes?${setFilter}&${sortOrder}&q=${searchTerm}`,
			providesTags: (result, error, { searchTerm }) => [
				{
					type: 'Recipes',
					id: searchTerm,
				},
			],
		}),
		getRecipeById: builder.query<IRecipe[], string>({
			query: searchTerm => `/recipes?id=${searchTerm}`,
			providesTags: (result, error, searchTerm) => [
				{
					type: 'Recipe',
					id: searchTerm,
				},
			],
		}),
		getCategories: builder.query<ICategory[], string>({
			query: () => '/categories',
			providesTags: (result, error, searchTerm) => [
				{
					type: 'Category',
					id: searchTerm,
				},
			],
		}),
		getAreas: builder.query<IArea[], string>({
			query: () => '/areas',
			providesTags: (result, error, searchTerm) => [
				{
					type: 'Area',
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

export const {
	useGetRecipesQuery,
	useGetRecipeByIdQuery,
	useGetCategoriesQuery,
	useGetAreasQuery,
	useCreateRecipeMutation,
} = api
