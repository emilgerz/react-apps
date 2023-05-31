import { useState } from 'react'

export function MenuList({ id, name, checkbox, parentId, dataCheckbox, setDataCheckbox }) {
	const [expand, setExpand] = useState(false)

	// if we have at least 1 child then we draw expand-arrow btn
	const childrens = dataCheckbox.filter((item) => item.parentId === id)

	const clickHandler = (event) => {
		if (event) {
			event.preventDefault()
		}

		setExpand(!expand)
	}

	const inputHandler = (list, checkbox) => {
		if (list.length > 0) {
			return list.every((item) => item.checkbox === true)
		} else {
			return checkbox
		}
	}

	const onChangeHandler = (list, checkbox) => {
		const updatedDataCheckbox = list.map((item) => {
			if (item.id === id) {
				item.checkbox = !checkbox
			}

			return item
		})

		setDataCheckbox(updatedDataCheckbox)
		setExpand(!!expand)
	}

	return (
		<li className="list__item">
			<input
				type="checkbox"
				name={name}
				id={id}
				checked={inputHandler(childrens, checkbox)}
				onChange={() => onChangeHandler(dataCheckbox, checkbox)}
			/>

			<a
				onClick={(e) => clickHandler(e)}
				href=""
			>
				{name}
			</a>

			{childrens.length > 0 && (
				<div
					className={expand ? 'arrow-btn arrow-btn_openned' : 'arrow-btn'}
					onClick={() => clickHandler()}
				></div>
			)}

			{expand &&
				dataCheckbox.map((item) => {
					if (item.parentId === id) {
						return (
							<ul
								className="list"
								key={item.id}
							>
								<MenuList
									key={item.id}
									{...item}
									dataCheckbox={dataCheckbox}
									setDataCheckbox={setDataCheckbox}
								/>
							</ul>
						)
					}
				})}
		</li>
	)
}
