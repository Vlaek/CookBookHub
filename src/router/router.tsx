import About from '../pages/About/About'
import Auth from '../pages/Auth/Auth'
import Favorites from '../pages/Favorites/Favorites'
import Main from '../pages/Main/Main'
import MyRecipes from '../pages/MyRecipes/MyRecipes'
import Recipe from '../pages/Recipe/Recipe'

export const routes = [
	{ path: '/CookBookHub/auth', element: <Auth />, exact: true },
	{ path: '/CookBookHub/recipes', element: <Main />, exact: true },
	{ path: '/CookBookHub/favorites', element: <Favorites />, exact: true },
	{ path: '/CookBookHub/my-recipes', element: <MyRecipes />, exact: true },
	{ path: '/CookBookHub/about', element: <About />, exact: true },
	{ path: '/CookBookHub/recipe/:id', element: <Recipe />, exact: true },
	{ path: '/CookBookHub/myRecipe/:id', element: <Recipe />, exact: true },
]
