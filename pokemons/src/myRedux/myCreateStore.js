export const myCreateStore = (reducer, initialState) => {
	let state = initialState

	return {
		getState: () => {
			return state
		},

		subscribe: () => {},

		dispatch: (action) => {
			state = reducer(state, action)
		},
	}
}
