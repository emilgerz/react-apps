import 'modern-css-reset'
import './App.scss'
import { MenuList } from './components/MenuList'
import data from './data/data.json'

function App() {
	// parent has not key with his parentId
	const parentFilterList = data.filter((parentFilter) => !parentFilter.parentId)

	return (
		<div className="app">
			<ul className="list">
				{parentFilterList.map((item) => (
					<MenuList
						key={item.id}
						{...item}
					/>
				))}
			</ul>
		</div>
	)
}

export default App
