export interface IUser {
	id: number
	name: string
}

export interface IInitialUserState {
	user: IUser
	isLoading: boolean
	error: null
}
