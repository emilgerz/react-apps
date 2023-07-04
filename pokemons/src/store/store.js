import { createStore } from 'redux'

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

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
