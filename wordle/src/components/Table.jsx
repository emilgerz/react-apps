import { ColoredWord } from './ColoredWord'
import { EmptyStroke } from './EmptyStroke'
import { Word } from './Word'

export function Table({ enteredWords, inputWord, hiddenWord }) {
	const emptyStrokes = enteredWords.length === 6 ? [] : Array(6 - enteredWords.length - 1).fill()

	return (
		<div className="wordle__table">
			{enteredWords.map((word) => (
				<ColoredWord
					key={word}
					word={word}
					hiddenWord={hiddenWord}
				/>
			))}

			{enteredWords.length < 6 && <Word inputWord={inputWord} />}

			{emptyStrokes.map((_, i) => (
				<EmptyStroke key={i} />
			))}
		</div>
	)
}
