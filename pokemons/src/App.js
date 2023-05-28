import { useState, useEffect, useCallback } from 'react'
import './App.css'
import PokemonButton from './components/PokemonButton'
import { getPokemons } from './asyncGetPokemons'
import { NextPage } from './components/NextPage'

const savePokemonStatus = () => new Promise((r) => setTimeout(r, 1000))

function App() {
	const [data, setData] = useState([])
	const [pokemonsIds, setpokemonsIds] = useState([])
	const [page, setPage] = useState(0)

	console.log(
		`%cAPP`,
		'color: blue; font-size: 2em; font-weight: bolder; text-shadow: #000 1px 1px;'
	)

	const handleNextPage = () => {
		setPage(page + 1)
		// handleClickNextPage(page + 1)
	}

	const handlePrevPage = () => {
		setPage(page - 1)
		// handleClickNextPage(page - 1)
	}

	// const handleClick = () => {
	// 	handleClickNextPage(0)
	// }

	useEffect(() => {
		getPokemons(page).then((x) => setData(x))
	}, [page])

	const catchPokemon = useCallback(async (id) => {
		await savePokemonStatus()

		setpokemonsIds((prev) => {
			if (prev.includes(id)) {
				return prev.filter((pokemonID) => pokemonID !== id)
			}

			return [...prev, id]
		})
	}, [])

	return (
		<>
			{/* С выключением кнопки "Загрузить покемонов"
			{data.length === 0 && (
				<button
					onClick={handleClick}
					className="get-pokemons-button"
				>
					Загрузить покемонов
				</button>
			)} */}
			{/* <button
				onClick={handleClick}
				className="get-pokemons-button"
			>
				Загрузить покемонов
			</button> */}
			<h1 className="counter">Поймано покемонов: {pokemonsIds.length}</h1>
			<div className="App">
				{data.map((pokemon) => (
					<PokemonButton
						name={pokemon.name}
						id={pokemon.id}
						onClick={catchPokemon}
						caught={pokemonsIds.includes(pokemon.id)}
					/>
				))}
			</div>
			<div className="page-buttons">
				<NextPage
					page={page}
					setStepState={setPage}
					nextPage={handleNextPage}
					prevPage={handlePrevPage}
				/>
			</div>
		</>
	)
}

export default App
