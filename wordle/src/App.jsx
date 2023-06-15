import 'normalize.css'
import './App.scss'
import { useState } from 'react'
import { Keyboard } from './components/Keyboard'
import { Table } from './components/Table'

function App() {
	const [hiddenWord, setHiddenWord] = useState('WORLD')
	const [enteredWords, setEnteredWords] = useState(['test1', 'test2'])
	const [inputWord, setInputWord] = useState('')

	const onLetterPress = (key) => {
		setInputWord((prev) => (prev.length < 5 ? prev + key : prev))
	}

	const onBsPress = () => {
		setInputWord((prev) => prev.slice(0, -1))
	}

	const onEnterPress = () => {
		if (inputWord.length === 5) {
			setEnteredWords([...enteredWords, inputWord])
			setInputWord('')
		}
	}

	console.log(inputWord, enteredWords)

	return (
		<div className="wordle">
			<Table
				enteredWords={enteredWords}
				inputWord={inputWord}
			/>

			<Keyboard
				onLetterPress={onLetterPress}
				onEnterPress={onEnterPress}
				onBsPress={onBsPress}
			/>
		</div>
	)
}

export default App
