import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../store/favorites/favoritesSlice'
import * as userActions from '../store/user/user.actions'

const rootActions = {
	...actions,
	...userActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
