import 'normalize.css'
import './App.scss'
import { useEffect, useState } from 'react'
import { Keyboard } from './components/Keyboard'
import { Table } from './components/Table'
import { newKeyboardStyles } from './newKeyboardStyles'

function App() {
	const [hiddenWord, setHiddenWord] = useState('WORLD')
	const [enteredWords, setEnteredWords] = useState([])
	const [inputWord, setInputWord] = useState('')

	const onLetterPress = (key) => {
		if (enteredWords.length < 6) {
			setInputWord((prev) => (prev.length < 5 ? prev + key : prev))
		}
	}

	const onBsPress = () => {
		setInputWord((prev) => prev.slice(0, -1))
	}

	const onEnterPress = () => {
		if (inputWord.length === 5 && enteredWords.length < 6) {
			setEnteredWords([...enteredWords, inputWord])
			setInputWord('')
		}
	}

	useEffect(() => {
		if (enteredWords.includes(hiddenWord)) {
			enteredWords.length = 6
			setEnteredWords(enteredWords)
		}
	}, [enteredWords, hiddenWord])

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
