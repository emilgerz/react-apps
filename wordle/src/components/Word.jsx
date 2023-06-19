export function Word({ inputWord }) {
	// const arrayFromInputWord = [...inputWord]
	// const emptyBlocks = Array(5 - inputWord.length).fill(' ')

	return (
		<div className="wordle__table__word">
			{Array(5)
				.fill()
				.map((_, i) => (
					<div
						key={i}
						className="wordle__table__word__letter"
						style={{ borderColor: '#a8a8a8' }}
					>
						<p>{inputWord[i]}</p>
					</div>
				))}

			{/* {emptyBlocks.map((_, i) => (
				<div
					className="wordle__table__word__letter"
					style={{ borderColor: '#d2d2d2' }}
					key={i}
				></div>
			))} */}
		</div>
	)
}
