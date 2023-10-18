import Auth from '../pages/Auth/Auth'
import Main from '../pages/Main/Main'

export const routes = [
	{ path: '/CookBookHub/auth', element: <Auth />, exact: true },
	{ path: '/CookBookHub/', element: <Main />, exact: true },
]
