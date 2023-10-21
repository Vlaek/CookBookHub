import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArea } from '../../types/areas.types'
import { ICategory } from '../../types/categories.types'
import { IRecipe, IRecipeData } from '../../types/recipe.types'

const API_URL = 'http://localhost:3000'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Recipes', 'Category', 'Area', 'Favorites'],
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
					type: 'Recipes',
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
					type: 'Recipes',
				},
			],
		}),
		getFavorites: builder.query<
			IRecipe[],
			{ searchTerm: string; sortOrder: string; setFilter: string }
		>({
			query: ({ searchTerm, sortOrder, setFilter }) =>
				`/favorites?${setFilter}&${sortOrder}&q=${searchTerm}`,
			providesTags: (result, error, { searchTerm }) => [
				{
					type: 'Favorites',
					id: searchTerm,
				},
			],
		}),
		getFavoritesById: builder.query<IRecipe[], number>({
			query: searchTerm => `/favorites?id=${searchTerm}`,
			providesTags: (result, error, searchTerm) => [
				{
					type: 'Favorites',
					id: searchTerm,
				},
			],
		}),
		createFavorites: builder.mutation<null, IRecipeData>({
			query: recipe => ({
				body: recipe,
				url: '/favorites',
				method: 'POST',
			}),
			invalidatesTags: () => [
				{
					type: 'Favorites',
				},
			],
		}),
		deleteFavorites: builder.mutation<null, number>({
			query: id => ({
				url: `/favorites/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [
				{
					type: 'Favorites',
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
	useGetFavoritesQuery,
	useGetFavoritesByIdQuery,
	useCreateFavoritesMutation,
	useDeleteFavoritesMutation,
} = api
