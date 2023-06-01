import 'modern-css-reset'
import './App.scss'
import { MenuList } from './components/MenuList'
import data from './data/data.json'
import { useState } from 'react'

function findAncestors(id, data) {
	const current = data.find((item) => item.id === id)

	if (current.parentId === undefined) {
		return []
	}

	return [current.parentId, ...findAncestors(current.parentId, data)]
}

function findDescendants(id, data) {
	const childrenIds = data.filter((item) => item.parentId === id).map((item) => item.id)

	const descendants = [...childrenIds]

	for (const childId of childrenIds) {
		descendants.push(...findDescendants(childId, data))
	}

	return descendants
}

function App() {
	const [checkedIds, setCheckedIds] = useState([28958, 12679])

	const checkboxHandler = (id) => {
		setCheckedIds((prev) => {
			if (prev.includes(id)) {
				const descendants = findDescendants(id, data)

				return prev.filter((item) => !descendants.includes(item) && item !== id)
			} else {
				return [...prev, id, ...findDescendants(id, data), ...findAncestors(id, data)]
			}
		})
	}

	// parent has not key with his parentId
	const parentFilterList = data.filter((parentFilter) => !parentFilter.parentId)

	return (
		<div className="app">
			<ul className="list">
				{parentFilterList.map((item) => (
					<MenuList
						data={data}
						key={item.id}
						id={item.id}
						name={item.name}
						checkedIds={checkedIds}
						checkboxHandler={checkboxHandler}
					/>
				))}
			</ul>
		</div>
	)
}

export default App
