import { ColoredWord } from './ColoredWord'
import { EmptyStroke } from './EmptyStroke'
import { Word } from './Word'

export function Table({ enteredWords, inputWord, hiddenWord, lettersBackground }) {
	const emptyStrokes = Array(6 - enteredWords.length).fill(' ')

	return (
		<div className="wordle__table">
			{enteredWords.map((word, i) => (
				<ColoredWord
					key={word + i}
					word={word}
					hiddenWord={hiddenWord}
					lettersBackground={lettersBackground}
				/>
			))}

			{enteredWords.length < 6 && <Word inputWord={inputWord} />}

			{emptyStrokes.slice(0, -1).map((_, i) => (
				<EmptyStroke key={i} />
			))}
		</div>
	)
}
