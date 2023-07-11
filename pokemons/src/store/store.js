import { createStore, applyMiddleware } from 'redux'
import { getPokemons } from '../asyncGetPokemons'

const initialState = {
	data: [],
	pokemonIds: [],
	currentPage: 0,
}

const reducer = (state = initialState, action) => {
	if (action.type === 'RECIEVE_POKEMONS_DATA') {
		return { ...state, data: action.value }
	}

	if (action.type === 'PUSH_POKEMON_ID') {
		if (state.pokemonIds.includes(action.value)) {
			return { ...state, pokemonIds: state.pokemonIds.filter((id) => id !== action.value) }
		}

		return { ...state, pokemonIds: [...state.pokemonIds, action.value] }
	}

	if (action.type === 'PAGE_FORWARD') {
		return { ...state, currentPage: state.currentPage + 1 }
	}

	if (action.type === 'PAGE_BACK') {
		return { ...state, currentPage: state.currentPage - 1 }
	}

	return state
}

const thnkmdlwr = (storeApi) => (next) => (action) => {
	if (typeof action === 'function') {
		action(storeApi.dispatch)
	} else {
		return next(action)
	}
}

const CHANGE_PAGE_ACTIONS = ['PAGE_FORWARD', 'PAGE_BACK']

const pageMdlwr =
	({ dispatch, getState }) =>
	(next) =>
	(action) => {
		next(action)

		if (CHANGE_PAGE_ACTIONS.includes(action.type)) {
			dispatch(fetchPokemons(getState().currentPage))
		}
	}

const fetchPokemons = (currentPage) => (dispatch) => {
	dispatch({
		type: 'RECIEVE_POKEMONS_START',
	})

	getPokemons(currentPage)
		.then((data) =>
			dispatch({
				type: 'RECIEVE_POKEMONS_DATA',
				value: data,
			})
		)
		.catch(() => {
			dispatch({
				type: 'RECIEVE_POKEMONS_FAILED',
			})
		})
}

export const store = createStore(
	reducer,
	applyMiddleware(thnkmdlwr, pageMdlwr)
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const currentPage = store.getState().currentPage
store.dispatch(fetchPokemons(currentPage))
