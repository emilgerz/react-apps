import { lettersBackground } from '../lettersBackground'
import { status2color } from '../keyStyles'

// const status2color = {
// 	correct: '#14b521',
// 	includes: '#bfbf0d',
// 	fail: '#919191',
// }

export function ColoredWord({ word, hiddenWord }) {
	const lettersBg = lettersBackground(word, hiddenWord)
	// .map(([_, status]) => status2color[status])

	// .map((letterAndColor) => {
	// 	switch (letterAndColor[1]) {
	// 		case 'correct':
	// 			return '#14b521'
	// 		case 'includes':
	// 			return '#bfbf0d'
	// 		case 'fail':
	// 			return '#919191'
	// 	}
	// })

	return (
		<div className="wordle__table__word">
			{lettersBg.map(([letter, status]) => (
				<div
					key={letter + status}
					className="wordle__table__word__letter"
					style={{ backgroundColor: status2color[status], color: 'white', borderColor: '#a8a8a8' }}
				>
					<p>{letter}</p>
				</div>
			))}
		</div>
	)
}
