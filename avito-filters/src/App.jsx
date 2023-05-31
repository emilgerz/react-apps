import 'modern-css-reset'
import './App.scss'
import { MenuList } from './components/MenuList'
import data from './data/data.json'
import { useState } from 'react'

function App() {
	const dataCheckboxOrigin = data.map((item) => ({ ...item, checkbox: false }))

	const [dataCheckbox, setDataCheckbox] = useState(dataCheckboxOrigin)

	// parent has not key with his parentId
	const parentFilterList = dataCheckbox.filter((parentFilter) => !parentFilter.parentId)

	return (
		<div className="app">
			<ul className="list">
				{parentFilterList.map((item) => (
					<MenuList
						key={item.id}
						{...item}
						dataCheckbox={dataCheckbox}
						setDataCheckbox={setDataCheckbox}
					/>
				))}
			</ul>
		</div>
	)
}

export default App
