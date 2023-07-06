import { ColoredWord } from './ColoredWord'
import { EmptyStroke } from './EmptyStroke'
import PropTypes from 'prop-types'
import { Word } from './Word'

export function Table({ enteredWords, inputWord, hiddenWord /* isWrongWord */ }) {
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

			{enteredWords.length < 6 && (
				<Word
					inputWord={inputWord}
					// isWrongWord={isWrongWord}
				/>
			)}

			{emptyStrokes.map((_, i) => (
				<EmptyStroke key={i} />
			))}
		</div>
	)
}

Table.propTypes = {
	enteredWords: PropTypes.array,
	inputWord: PropTypes.string,
	hiddenWord: PropTypes.string,
}
