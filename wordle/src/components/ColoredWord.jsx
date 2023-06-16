export function ColoredWord({ word, hiddenWord, lettersBackground }) {
	const arrayFromWord = [...word]

	const lettersBg = lettersBackground(word, hiddenWord).map((letterAndColor) => {
		switch (letterAndColor[1]) {
			case 'correct':
				return '#14b521'
			case 'includes':
				return '#bfbf0d'
			case 'fail':
				return '#919191'
		}
	})

	return (
		<div className="wordle__table__word">
			{arrayFromWord.map((letter, i) => (
				<div
					className="wordle__table__word__letter"
					style={{ backgroundColor: lettersBg[i], color: 'white', borderColor: '#a8a8a8' }}
					key={`${(letter, i)}`}
				>
					<p>{letter}</p>
				</div>
			))}
		</div>
	)
}
