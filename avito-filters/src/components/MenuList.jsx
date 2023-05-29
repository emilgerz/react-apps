import { useState } from 'react'
import data from '../data/data.json'

export function MenuList({ id, name, url, parentId }) {
	const [expand, setExpand] = useState(false)

	// if we have at least 1 child then we draw expand-arrow btn
	const hasChildrens = data.find((item) => item.parentId === id)

	const clickHandler = (event) => {
		setExpand(!expand)
		event.preventDefault()
	}

	return (
		<li className="list__item">
			<input
				type="checkbox"
				name={name}
				id={id}
			/>

			<a
				onClick={(e) => clickHandler(e)}
				href=""
			>
				{name}
			</a>

			{hasChildrens && (
				<div
					className={expand ? 'arrow-btn arrow-btn_openned' : 'arrow-btn'}
					onClick={() => clickHandler()}
				></div>
			)}

			{expand &&
				data.map((item) => {
					if (item.parentId === id) {
						return (
							<ul
								className="list"
								key={item.parentId}
							>
								<MenuList {...item} />
							</ul>
						)
					}
				})}
		</li>
	)
}
