import { lettersBackground } from '../functions/lettersBackground'
import { status2color } from '../functions/satus2color'

export function ColoredWord({ word, hiddenWord }) {
	const lettersBg = lettersBackground(word, hiddenWord)
	return (
		<div className="wordle__table__word">
			{lettersBg.map(([letter, status], i) => (
				<div
					key={letter + status + i}
					className="wordle__table__word__letter"
					style={{ backgroundColor: status2color[status], color: 'white', borderColor: '#a8a8a8' }}
				>
					<p>{letter}</p>
				</div>
			))}
		</div>
	)
}
