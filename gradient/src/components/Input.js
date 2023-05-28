import { useState } from 'react'
import './Input.css'
import styles from './Styles.module.css'

const initialColors = { col1: '', col2: '', col3: '' }

export function Input({ setBackground }) {
	const [inputColors, setInputColors] = useState(initialColors)

	function handleClick(event) {
		event.preventDefault()

		const colorValues = Object.values(inputColors)
		const rusLetters = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i
		const isValid = colorValues.every((color) => rusLetters.test(color))

		if (!isValid) {
			alert('Введите или выберите два цвета')
			return
		}

		setBackground(`linear-gradient(${colorValues.join(', ')})`)
	}

	function hadnleResetButton() {
		setInputColors(initialColors)
	}

	function handleColorInput(event) {
		const value = event.target.value
		const key = event.target.name

		setInputColors({ ...inputColors, [key]: value })
	}

	return (
		<>
			<form
				action="sumbit"
				onSubmit={handleClick}
				name="colorPicker"
			>
				{Object.keys(initialColors).map((key, i) => (
					<label>
						{i + 1} цвет:
						<input
							type="text"
							className="input"
							name={`col${i + 1}`}
							value={inputColors[key]}
							onChange={handleColorInput}
							placeholder="Введите или выберите цвет"
						/>
						<input
							type="color"
							className="input__color"
							name={`col${i + 1}`}
							value={inputColors[key]}
							onChange={handleColorInput}
						/>
					</label>
				))}

				<button className={styles.btn}>Go</button>
				<button
					className={styles.btn}
					onClick={hadnleResetButton}
					type="button"
				>
					Reset
				</button>
			</form>
		</>
	)
}
