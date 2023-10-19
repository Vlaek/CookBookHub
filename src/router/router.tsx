import Auth from '../pages/Auth/Auth'
import Favorites from '../pages/Favorites/Favorites'
import Main from '../pages/Main/Main'

export const routes = [
	{ path: '/CookBookHub/auth', element: <Auth />, exact: true },
	{ path: '/CookBookHub/recipes', element: <Main />, exact: true },
	{ path: '/CookBookHub/favorites', element: <Favorites />, exact: true },
]
