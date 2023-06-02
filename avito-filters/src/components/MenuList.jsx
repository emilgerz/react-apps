import { useState } from 'react'

export function MenuList({ id, name, checkedIds, data, checkboxHandler }) {
	const [expand, setExpand] = useState(false)

	const childrens = data.filter((item) => item.parentId === id)

	const clickHandler = (event) => {
		if (event) {
			event.preventDefault()
		}

		setExpand(!expand)
	}

	return (
		<li className="list__item">
			<input
				type="checkbox"
				name={name}
				id={id}
				checked={checkedIds.includes(id)}
				onChange={() => checkboxHandler(id)}
			/>

			<a
				onClick={(e) => clickHandler(e)}
				href=""
			>
				{name}
			</a>

			{childrens.length > 0 && (
				<button
					className={expand ? 'arrow-btn arrow-btn_openned' : 'arrow-btn'}
					onClick={() => clickHandler()}
				></button>
			)}

			{expand && (
				<ul>
					{childrens.map((item) => (
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
			)}
		</li>
	)
}
