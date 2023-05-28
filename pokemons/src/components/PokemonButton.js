import { memo } from 'react'
import './PokemonButton.css'

// https://www.npmjs.com/package/classnames
const cn = (...args) => args.filter(Boolean).join(' ')

function PokemonButton(props) {
	// const [caught, setCaught] = useState(false)
	const { name, id, onClick, caught } = props
	const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

	console.log(
		`%c${name}!`,
		'color: red; font-size: 1.5em; font-weight: bolder; text-shadow: #000 1px 1px;'
	)

	const handleClick = () => {
		onClick(id)
		// setCaught(!caught)
	}

	return (
		<div
			className={cn('circle', caught && 'circleCaught')}
			// className={caught ? 'circle' : 'circle circleCaught'}
			// style={{ backgroundColor: caught ? 'red' : 'green' }}
		>
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
