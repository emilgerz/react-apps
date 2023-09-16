import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PokemonButton from './components/PokemonButton'
import { NextPage } from './components/NextPage'
import styles from './App.module.css'

export function App() {
	const currentPage = useSelector((state) => state.currentPage)
	const pokemons = useSelector((state) => state.data)
	const pokemonIds = useSelector((state) => state.pokemonIds)
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	// fetchPokemons(currentPage)(dispatch);
	// 	dispatch(fetchPokemons(currentPage))
	// }, [currentPage])

	return (
		<>
			<h1 className={styles.counter}>Поймано покемонов: {pokemonIds.length}</h1>

			<div className={styles.app}>
				{pokemons.map((pokemon) => (
					<PokemonButton
						key={pokemon.id}
						name={pokemon.name}
						id={pokemon.id}
						caught={pokemonIds.includes(pokemon.id)}
					/>
				))}
			</div>

			<div className={styles.pageButtons}>
				<NextPage />
			</div>
		</>
	)
}

// const mapStateToProps = (state) => {
// 	return { pokemons: state }
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		recieveData: (data) =>
// 			dispatch({
// 				type: 'RECIEVE_POKEMONS_DATA',
// 				value: data,
// 			}),

// 		// catchNewPokemon: (id) =>
// 		// 	dispatch({
// 		// 		type: 'PUSH_POKEMON_ID',
// 		// 		value: id,
// 		// 	}),

// 		// pageForward: () =>
// 		// 	dispatch({
// 		// 		type: 'PAGE_FORWARD',
// 		// 	}),

// 		// pageBack: () =>
// 		// 	dispatch({
// 		// 		type: 'PAGE_BACK',
// 		// 	}),
// 	}
// }

// // export const App = connect(mapStateToProps, mapDispatchToProps)(App_pure)
