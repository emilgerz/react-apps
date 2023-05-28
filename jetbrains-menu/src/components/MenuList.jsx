/* eslint-disable react/prop-types */
import { MenuItem } from './MenuItem'

export function MenuList(props) {
	const { ids, entities, selectedItemId, setSelectedItemId } = props

	return (
		<ul>
			{ids.map((id) => (
				<MenuItem
					key={id}
					id={id}
					entities={entities}
					setSelectedItemId={setSelectedItemId}
					selectedItemId={selectedItemId}
				/>
			))}
		</ul>
	)
}
