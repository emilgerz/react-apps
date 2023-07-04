import { memo } from 'react'
import './PokemonButton.css'

// https://www.npmjs.com/package/classnames
const cn = (...args) => args.filter(Boolean).join(' ')

function PokemonButton(props) {
	const { name, id, onClick, caught } = props
	const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

	const handleClick = () => {
		onClick(id)
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
