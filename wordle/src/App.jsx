import 'normalize.css'
import './App.scss'
import { useEffect, useState } from 'react'
import { Keyboard } from './components/Keyboard'
import { Table } from './components/Table'

function App() {
	const [hiddenWord, setHiddenWord] = useState('WORLD')
	const [enteredWords, setEnteredWords] = useState([])
	const [inputWord, setInputWord] = useState('')

	const lettersBackground = (word, hiddenWord) => {
		return Array.from(word, (letter, i) => {
			if (letter === hiddenWord[i]) {
				return [letter, 'correct']
			}

			if (hiddenWord.includes(letter)) {
				return [letter, 'includes']
			}

			return [letter, 'fail']
		})
	}

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

	return (
		<>
			<div className="heading">
				<h1>WORDLE</h1>
				<h3>
					by
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
				{enteredWords.length === 6 && <p className="wordle__result">{hiddenWord}</p>}
				{enteredWords.includes(hiddenWord) && <p className="wordle__result">WIN</p>}

				<Table
					enteredWords={enteredWords}
					inputWord={inputWord}
					hiddenWord={hiddenWord}
					lettersBackground={lettersBackground}
				/>

				<Keyboard
					lettersBackground={lettersBackground}
					onLetterPress={onLetterPress}
					onEnterPress={onEnterPress}
					enteredWords={enteredWords}
					hiddenWord={hiddenWord}
					onBsPress={onBsPress}
				/>
			</div>
		</>
	)
}

export default App
