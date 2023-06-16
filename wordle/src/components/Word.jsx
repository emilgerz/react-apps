export function Word({ inputWord }) {
	const arrayFromInputWord = [...inputWord]
	const emptyBlocks = Array(5 - inputWord.length).fill(' ')

	return (
		<div className="wordle__table__word">
			{arrayFromInputWord.map((letter, i) => (
				<div
					className="wordle__table__word__letter"
					style={{ borderColor: '#a8a8a8' }}
					key={letter + i}
				>
					<p>{letter}</p>
				</div>
			))}

			{emptyBlocks.map((_, i) => (
				<div
					className="wordle__table__word__letter"
					style={{ borderColor: '#d2d2d2' }}
					key={i}
				></div>
			))}
		</div>
	)
}
