import 'modern-css-reset'
import styles from './App.module.css'
import { MenuList } from './components/MenuList'
import { data } from './data/data'
import { useState } from 'react'

function App() {
	const [selectedItemId, setSelectedItemId] = useState('')

	const topLevelIds = data.topLevelIds

	return (
		<div className={styles.content}>
			<div className={styles.menu}>
				<MenuList
					ids={topLevelIds}
					selectedItemId={selectedItemId}
					setSelectedItemId={setSelectedItemId}
					entities={data.entities}
				/>
			</div>
			<div className={styles.activePage}>
				<p>{selectedItemId}</p>
			</div>
		</div>
	)
}

export default App
