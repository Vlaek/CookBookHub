import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions as favoritesAction } from '../store/favorites/favoritesSlice'
import { actions as filterAction } from './../store/filter/filterSlice'

const rootActions = {
	...favoritesAction,
	...filterAction,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
