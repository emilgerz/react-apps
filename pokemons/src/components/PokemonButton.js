import { memo } from 'react'
import './PokemonButton.css'
import { useDispatch } from 'react-redux'

// https://www.npmjs.com/package/classnames
const cn = (...args) => args.filter(Boolean).join(' ')

const savePokemonStatus = () => new Promise((r) => setTimeout(r, 1000))

function PokemonButton(props) {
	const { name, id, caught } = props
	const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

	const dispatch = useDispatch()

	const handleClick = async () => {
		await savePokemonStatus()

		dispatch({
			type: 'PUSH_POKEMON_ID',
			value: id,
		})
	}

	return (
		<div className={cn('circle', caught && 'circleCaught')}>
			<p className="pokemon-name">{name}</p>
			<img
				src={url}
				alt=""
			/>
			<button
				className="button"
				onClick={handleClick}
			>
				{caught ? 'Отпустить' : 'Поймать'}
			</button>
		</div>
	)
}

export default memo(PokemonButton)
