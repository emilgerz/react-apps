import { memo } from 'react'
import styles from './PokemonButton.module.css'
import { useDispatch } from 'react-redux'

// https://www.npmjs.com/package/classnames
const cn = (...args) => args.filter(Boolean).join(' ')

const savePokemonStatus = () => new Promise((r) => setTimeout(r, 500))

function PokemonButton(props) {
	const { name, id, caught } = props
	const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

	console.log('i rend')

	const dispatch = useDispatch()

	const handleClick = async () => {
		await savePokemonStatus()

		dispatch({
			type: 'PUSH_POKEMON_ID',
			value: id,
		})
	}

	return (
		<div className={cn(styles.circle, caught && styles.circleCaught)}>
			<p className={styles.pokemonName}>{name}</p>
			<img
				src={url}
				alt=""
			/>
			<button
				className={styles.button}
				onClick={handleClick}
			>
				{caught ? 'Отпустить' : 'Поймать'}
			</button>
		</div>
	)
}

export default memo(PokemonButton)
