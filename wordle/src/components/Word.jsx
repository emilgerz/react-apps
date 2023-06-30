import PropTypes from 'prop-types'

export function Word({ inputWord }) {
	return (
		<div className="wordle__table__word">
			{Array(5)
				.fill()
				.map((_, i) => (
					<div
						key={i}
						className="wordle__table__word__letter"
						style={{ borderColor: inputWord[i] ? '#a8a8a8' : false }}
					>
						<p>{inputWord[i]}</p>
					</div>
				))}
		</div>
	)
}

Word.propTypes = {
	inputWord: PropTypes.string,
}
