import { useEffect, useReducer } from 'react'
import { newKeyboardStyles } from './assets/functions/newKeyboardStyles'
import { Keyboard } from './components/Keyboard'
import { Table } from './components/Table'
import { wordsBank } from './assets/wordsBank'
import 'modern-css-reset'
import './App.scss'

const initialState = {
	hiddenWord: '',
	enteredWords: [],
	inputWord: '',
	// wrongWord: false,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ENTER_PRESS': {
			const { inputWord } = state
			if (inputWord.length !== 5) {
				return state
			}

			return {
				...state,
				inputWord: '',
				enteredWords: [...state.enteredWords, inputWord],
				// wrongWord: false,
			}
		}

		case 'LETTER_PRESS': {
			const { inputWord, enteredWords, hiddenWord } = state

			if (enteredWords.includes(hiddenWord)) {
				return state
			}

			return {
				...state,
				inputWord: inputWord.length < 5 ? inputWord + action.letter : inputWord,
			}
		}

		case 'BS_PRESS': {
			return { ...state, inputWord: state.inputWord.slice(0, -1) }
		}

		case 'SET_RANDOM_WORD': {
			return { ...state, hiddenWord: wordsBank.at(action.value).toUpperCase() }
		}

		case 'RESET_STATE': {
			return initialState
		}

		// case 'WRONG_WORD': {
		// 	return { ...state, wrongWord: true }
		// }

		default: {
			return state
		}
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { hiddenWord, enteredWords, inputWord } = state

	const win = enteredWords.includes(hiddenWord)
	const failed = !win && enteredWords.length === 6

	// Uncomment below this if you are weak
	// console.log(hiddenWord)

	const onLetterPress = (key) => {
		dispatch({ type: 'LETTER_PRESS', letter: key })
	}

	const onBsPress = () => {
		dispatch({ type: 'BS_PRESS' })
	}

	const onEnterPress = () => {
		console.log({ inputWord })
		// if (!wordsBank.includes(inputWord)) {
		// 	dispatch({ type: 'WRONG_WORD' })
		// 	return
		// }

		dispatch({ type: 'ENTER_PRESS' })
	}

	const newWordHandler = () => {
		const randomIndex = Math.floor(Math.random() * wordsBank.length + 1)

		dispatch({ type: 'RESET_STATE' })
		dispatch({ type: 'SET_RANDOM_WORD', value: randomIndex })
	}

	useEffect(() => {
		newWordHandler()
	}, [])

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
				{win && <p className="wordle__result">🎉 WIN 🎉</p>}

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

				{(failed || win) && (
					<button
						className="wordle__button-restart"
						onClick={newWordHandler}
					>
						RECIEVE NEW WORD
					</button>
				)}
			</div>
		</>
	)
}

export default App
