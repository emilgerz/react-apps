import { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import PokemonButton from './components/PokemonButton'
import { getPokemons } from './asyncGetPokemons'
import { NextPage } from './components/NextPage'
import './App.css'

const savePokemonStatus = () => new Promise((r) => setTimeout(r, 1000))

// В сторе использовал new Set() для айдишников покемонов – почему-то не обновлялся стейт

function App_pure(props) {
	const { pokemons, catchNewPokemon, pageBack, pageForward, recieveData } = props

	const handleNextPage = () => {
		pageForward()
	}

	const handlePrevPage = () => {
		pageBack()
	}

	useEffect(() => {
		getPokemons(pokemons.currentPage).then((x) => recieveData(x))
	}, [pokemons.currentPage])

	const catchPokemon = useCallback(async (id) => {
		await savePokemonStatus()

		catchNewPokemon(id)
	}, [])

	return (
		<>
			<h1 className="counter">Поймано покемонов: {pokemons.pokemonIds.length}</h1>
			<div className="App">
				{pokemons.data.map((pokemon) => (
					<PokemonButton
						key={pokemon.id}
						name={pokemon.name}
						id={pokemon.id}
						onClick={catchPokemon}
						caught={pokemons.pokemonIds.includes(pokemon.id)}
					/>
				))}
			</div>
			<div className="page-buttons">
				<NextPage
					page={pokemons.currentPage}
					nextPage={handleNextPage}
					prevPage={handlePrevPage}
				/>
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

		catchNewPokemon: (id) =>
			dispatch({
				type: 'PUSH_POKEMON_ID',
				value: id,
			}),

		pageForward: () =>
			dispatch({
				type: 'PAGE_FORWARD',
			}),

		pageBack: () =>
			dispatch({
				type: 'PAGE_BACK',
			}),
	}
}

export const App = connect(mapStateToProps, mapDispatchToProps)(App_pure)
