import Backspace from '../assets/Backspace.svg'

const keyboardKeys = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

export function Keyboard({ onLetterPress, onBsPress, onEnterPress }) {
	return (
		<div className="keyboard">
			<div>
				{keyboardKeys[0].map((key) => (
					<button
						key={key}
						onClick={() => onLetterPress(key)}
					>
						{key}
					</button>
				))}
			</div>

			<div>
				{keyboardKeys[1].map((key) => (
					<button
						key={key}
						onClick={() => onLetterPress(key)}
					>
						{key}
					</button>
				))}
			</div>

			<div>
				<button
					style={{ fontSize: 16 }}
					onClick={onEnterPress}
				>
					ENTER
				</button>

				{keyboardKeys[2].map((key) => (
					<button
						key={key}
						onClick={() => onLetterPress(key)}
					>
						{key}
					</button>
				))}

				<button
					style={{ padding: '0 20px' }}
					onClick={() => onBsPress()}
				>
					<img src={Backspace} />
				</button>
			</div>
		</div>
	)
}
