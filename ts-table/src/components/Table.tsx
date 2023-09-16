import { useState } from 'react'
import s from './Table.module.scss'

interface TableProps<T> {
	data: T[]
	onClick?: (row: T) => void
	columns: {
		title: string
		render: (x: T) => string
		comparator: Comparator<T>
	}[]
}

type Comparator<T> = (a: T, b: T) => number

// const cn = (...classes: any) => classes.filter(Boolean).join(' ')

export function Table<T extends { id: number }>(props: TableProps<T>) {
	const { data, columns, onClick } = props
	const [mode, setMode] = useState<[null | Comparator<T>, number]>([null, 1])

	const handleClick = (compareFn: (a: T, b: T) => number) => {
		setMode((prev) => [compareFn, prev[0] === compareFn ? -prev[1] : 1])
	}

	const [comparator, sign] = mode
	const sortedData =
		comparator === null
			? data
			: data.slice().sort((a, b) => sign * comparator(a, b))

	console.log(mode)

	return (
		<table className={s.table}>
			<thead>
				<tr>
					{columns.map((column, i) => (
						<th
							key={i}
							// className={cn(s.sortDecr)}
							style={{
								background:
									column.comparator === comparator ? 'green' : undefined,
							}}
							onClick={() => handleClick(column.comparator)}
						>
							{column.title}
						</th>
					))}
				</tr>
			</thead>

			<tbody>
				{sortedData.map((item, i) => (
					<tr
						key={i}
						onClick={() => onClick?.(item)}
					>
						{columns.map((column, i) => (
							<td key={i}>{column.render(item)}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}

/**
 * 
const users: User[] = [
	{
		id: 1,
		firstName: 'Qwer',
		lastName: 'Jjigirt',
		birthYear: 2008,
	},
	{
		id: 3,
		firstName: 'Luu',
		lastName: 'Ugyy',
		birthYear: 1995,
	},
]

const personsColumns = [
	{
		title: 'Full Name',
		render: (person: User) => person.firstName + ' ' + person.lastName,
	},
	{
		title: 'Age',
		render: (person: User) => String(new Date().getFullYear() - person.birthYear),
	},
]
 */
