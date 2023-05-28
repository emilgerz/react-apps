import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'

function App() {
	const [background, setBackground] = useState('white')

	return (
		<div
			className="App"
			style={{
				background,
			}}
		>
			<Input setBackground={setBackground} />
		</div>
	)
}

export default App
