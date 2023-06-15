export function ColoredWord({ word }) {
	const arrayFromWord = [...word]

	return (
		<div className="wordle__table__word">
			{arrayFromWord.map((letter, i) => (
				<div
					className="wordle__table__word__letter_filled"
					key={`${(letter, i)}`}
				>
					<p>{letter}</p>
				</div>
			))}
		</div>
	)
}
