import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilter } from '../../types/filter.types'

const initialState: IFilter = {
	sort: '_sort=id&_order=desc',
	query: '',
	filter: '',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilter: (state, { payload: filter }: PayloadAction<IFilter>) => {
			return filter
		},
	},
})

export const { actions, reducer } = filterSlice
