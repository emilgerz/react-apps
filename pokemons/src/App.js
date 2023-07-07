import { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import PokemonButton from './components/PokemonButton'
import { getPokemons } from './asyncGetPokemons'
import { NextPage } from './components/NextPage'
import styles from './App.module.css'

function App_pure(props) {
	const { pokemons, recieveData } = props

	console.log(pokemons)

	useEffect(() => {
		getPokemons(pokemons.currentPage).then((x) => recieveData(x))
	}, [pokemons.currentPage])

	return (
		<>
			<h1 className={styles.counter}>Поймано покемонов: {pokemons.pokemonIds.length}</h1>

			<div className={styles.app}>
				{pokemons.data.map((pokemon) => (
					<PokemonButton
						key={pokemon.id}
						name={pokemon.name}
						id={pokemon.id}
						caught={pokemons.pokemonIds.includes(pokemon.id)}
					/>
				))}
			</div>

			<div className={styles.pageButtons}>
				<NextPage page={pokemons.currentPage} />
			</div>
		</>
	)
}

const mapStateToProps = (state) => {
	return { pokemons: state }
}

const mapDispatchToProps = (dispatch) => {
	return {
		recieveData: (data) =>
			dispatch({
				type: 'RECIEVE_POKEMONS_DATA',
				value: data,
			}),

		// catchNewPokemon: (id) =>
		// 	dispatch({
		// 		type: 'PUSH_POKEMON_ID',
		// 		value: id,
		// 	}),

		// pageForward: () =>
		// 	dispatch({
		// 		type: 'PAGE_FORWARD',
		// 	}),

		// pageBack: () =>
		// 	dispatch({
		// 		type: 'PAGE_BACK',
		// 	}),
	}
}

export const App = connect(mapStateToProps, mapDispatchToProps)(App_pure)
