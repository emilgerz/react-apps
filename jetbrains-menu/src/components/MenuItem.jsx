/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './MenuItem.module.css'
import { MenuList } from './MenuList'
import { MenuListAnchor } from './MenuItemAnchor'

export const MenuItem = ({ id, entities, setSelectedItemId, selectedItemId }) => {
	const [dropdownOpened, setDropdownOpened] = useState(false)

	const { pages, anchors, title, url } = entities.pages[id]

	const buttonArrow = dropdownOpened ? '↑' : '↓'

	return (
		<>
			<li
				key={id}
				className={id === selectedItemId ? styles.active : ''}
				onClick={() => setDropdownOpened(!dropdownOpened)}
			>
				{pages && (
					<button
						className={styles.button}
						onClick={() => setDropdownOpened(!dropdownOpened)}
					>
						{buttonArrow}
					</button>
				)}
				<a
					href={url}
					onClick={(e) => {
						e.preventDefault()
						setSelectedItemId(id)
					}}
				>
					{title}
				</a>
			</li>

			{pages && dropdownOpened && (
				<MenuList
					entities={entities}
					ids={entities.pages[id].pages}
					setSelectedItemId={setSelectedItemId}
					selectedItemId={selectedItemId}
				/>
			)}

			{anchors && dropdownOpened && (
				<MenuListAnchor
					entities={entities}
					ids={anchors}
					setSelectedItemId={setSelectedItemId}
					selectedItemId={selectedItemId}
				/>
			)}
		</>
	)
}
