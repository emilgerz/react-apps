/* eslint-disable react/prop-types */
import styles from './MenuItem.module.css'

export function MenuListAnchor({ entities, ids, setSelectedItemId, selectedItemId }) {
	return (
		<>
			{ids.map((id) => (
				<ul
					key={id}
					className={id === selectedItemId ? styles.active : ''}
					onClick={() => setSelectedItemId(id)}
				>
					<li>{entities.anchors[id].title}</li>
				</ul>
			))}
		</>
	)
}
