import { useReducer } from 'react'
import { newKeyboardStyles } from './functions/newKeyboardStyles'
import { Keyboard } from './components/Keyboard'
import { Table } from './components/Table'
import 'normalize.css'
import './App.scss'

const initialState = {
	hiddenWord: 'WORLD',
	enteredWords: [],
	inputWord: '',
}

const reducer = (state = initialState, action) => {
	if (state.enteredWords.includes(state.hiddenWord)) {
		return state
	}

	switch (action.type) {
		case 'ENTER_PRESS': {
			const { inputWord } = state
			if (inputWord.length !== 5) {
				return state
			}

			return {
				...state,
				inputWord: '',
				enteredWords: [...state.enteredWords, state.inputWord],
			}
		}

		case 'LETTER_PRESS': {
			const { inputWord } = state
			return {
				...state,
				inputWord: inputWord.length < 5 ? inputWord + action.letter : inputWord,
			}
		}

		case 'BS_PRESS': {
			return { ...state, inputWord: state.inputWord.slice(0, -1) }
		}
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { hiddenWord, enteredWords, inputWord } = state

	console.log({ hiddenWord, enteredWords, inputWord })

	const onLetterPress = (key) => {
		dispatch({ type: 'LETTER_PRESS', letter: key })
	}

	const onBsPress = () => {
		dispatch({ type: 'BS_PRESS' })
	}

	const onEnterPress = () => {
		dispatch({ type: 'ENTER_PRESS' })
	}

	const win = enteredWords.includes(hiddenWord)
	const failed = !win && enteredWords.length === 6

	const letterColor = newKeyboardStyles(enteredWords, hiddenWord)

	return (
		<>
			<div className="heading">
				<h1>WORDLE</h1>
				<h3>
					by{' '}
					<a
						href="https://github.com/emilgerz"
						target="_blank"
						rel="noreferrer"
					>
						@emilgerz
					</a>
				</h3>
			</div>

			<div className="wordle">
				{failed && <p className="wordle__result">{hiddenWord}</p>}
				{win && <p className="wordle__result">WIN</p>}

				<Table
					enteredWords={enteredWords}
					inputWord={inputWord}
					hiddenWord={hiddenWord}
				/>

				<Keyboard
					onLetterPress={onLetterPress}
					onEnterPress={onEnterPress}
					onBsPress={onBsPress}
					letterColor={letterColor}
				/>
			</div>
		</>
	)
}

export default App
