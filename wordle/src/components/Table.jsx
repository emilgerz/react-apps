import { ColoredWord } from './ColoredWord'

export function Table({ enteredWords, inputWord }) {
	return (
		<div className="wordle__table">
			{enteredWords.map((word) => (
				<ColoredWord
					key={word}
					word={word}
				/>
			))}
		</div>
	)
}
