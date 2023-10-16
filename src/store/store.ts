import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favoritesSlice'
import { usersSlice } from './user/user.slice'
import { api } from './api/api'

const reducers = combineReducers({
	favorites: favoritesReducer,
	users: usersSlice.reducer,
	[api.reducerPath]: api.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
