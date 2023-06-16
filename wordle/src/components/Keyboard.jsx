import { useState } from 'react'
import { Backspace } from '../assets/Backspace'

const keyboardKeys = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

const keyboardKeysStyle = keyboardKeys.map((row) => row.map(() => 'clear'))

export function Keyboard({ onLetterPress, onBsPress, onEnterPress, enteredWords, lettersBackground, hiddenWord }) {
	const [keysStyle, setKeysStyle] = useState(keyboardKeysStyle)
	const [changeKeyStyles, setChangeKeyStyles] = useState(false)

	const styleTransform = (condition) => {
		switch (condition) {
			case 'clear':
				return { backgroundColor: '#d2d2d2', color: 'black' }
			case 'correct':
				return { backgroundColor: '#14b521', color: 'white' }
			case 'includes':
				return { backgroundColor: '#bfbf0d', color: 'white' }
			case 'fail':
				return { backgroundColor: '#919191', color: 'white' }
		}
	}

	// Тут ужас!!!!!!!!!!!!!!!!!!!!!!!!! мне стыдно за такой код
	if (changeKeyStyles) {
		const appendNewStyles = lettersBackground(enteredWords.at(-1), hiddenWord)

		setKeysStyle((prev) =>
			prev.map((row, indexRow) =>
				row.map((letter, indexLetter) => {
					for (const letterAndColor of appendNewStyles) {
						if (keyboardKeys[indexRow][indexLetter] === letterAndColor[0]) {
							return letterAndColor[1]
						}
					}

					return letter
				})
			)
		)

		setChangeKeyStyles(false)
	}

	console.log(keysStyle)

	return (
		<div className="keyboard">
			<div>
				{keyboardKeys[0].map((key, i) => (
					<button
						key={key}
						onClick={() => onLetterPress(key)}
						style={styleTransform(keysStyle[0][i])}
					>
						{key}
					</button>
				))}
			</div>

			<div>
				{keyboardKeys[1].map((key, i) => (
					<button
						key={key}
						onClick={() => onLetterPress(key)}
						style={styleTransform(keysStyle[1][i])}
					>
						{key}
					</button>
				))}
			</div>

			<div>
				<button
					style={{ fontSize: 16 }}
					onClick={() => {
						onEnterPress()
						setChangeKeyStyles(true)
					}}
				>
					ENTER
				</button>

				{keyboardKeys[2].map((key, i) => (
					<button
						key={key}
						onClick={() => onLetterPress(key)}
						style={styleTransform(keysStyle[2][i])}
					>
						{key}
					</button>
				))}

				<button
					style={{ padding: '0 20px' }}
					onClick={() => onBsPress()}
				>
					<Backspace />
				</button>
			</div>
		</div>
	)
}

// const keys = [
// 	[
// 		{ Q: 'clear' },
// 		{ W: 'clear' },
// 		{ E: 'clear' },
// 		{ R: 'clear' },
// 		{ T: 'clear' },
// 		{ Y: 'clear' },
// 		{ U: 'clear' },
// 		{ I: 'clear' },
// 		{ O: 'clear' },
// 		{ P: 'clear' },
// 	],
// 	[
// 		{ A: 'clear' },
// 		{ S: 'clear' },
// 		{ D: 'clear' },
// 		{ F: 'clear' },
// 		{ G: 'clear' },
// 		{ H: 'clear' },
// 		{ J: 'clear' },
// 		{ K: 'clear' },
// 		{ L: 'clear' },
// 	],
// 	[{ Z: 'clear' }, { X: 'clear' }, { C: 'clear' }, { V: 'clear' }, { B: 'clear' }, { N: 'clear' }, { M: 'clear' }],
// ]
