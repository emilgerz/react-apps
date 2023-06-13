import { useState } from 'react'
import data from './data/data.json'
import { MenuList } from './components/MenuList'
import 'modern-css-reset'
import './App.scss'

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

function findSameLevel(id, data) {
	const initialItem = data.find((item) => item.id === id)

	const parent = data.find((item) => item.id === initialItem.parentId)

	return [data.filter((item) => item.parentId === parent?.id).map((item) => item.id), parent?.id]
}

function App() {
	const [checkedIds, setCheckedIds] = useState([])

	const checkboxHandler = (id) => {
		setCheckedIds((prev) => {
			const descendants = findDescendants(id, data)
			const ancestors = findAncestors(id, data)
			const [sameLevelIds, parent] = findSameLevel(id, data)

			if (prev.includes(id)) {
				return prev.filter((item) => !ancestors.includes(item) && !descendants.includes(item) && item !== id)
			} else {
				if (sameLevelIds.filter((itemId) => itemId !== id).every((id) => prev.includes(id))) {
					const filledAncestors = ancestors.filter((id) => {
						return checkedIds.some((childId) => data.find((item) => item.id === childId).parentId === id)
					})

					// const filledAncestors = ancestors.filter((id) => {
					// 	const child = data.filter((item) => item.parentId === id)
					// 	return prev.includes(child)
					// })

					return [...prev, id, ...descendants, ...filledAncestors]
					//✅ ACTUAL // return [...prev, id, ...descendants, parent]
				}

				return [...prev, id, ...descendants]
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
