import './App.css'
import { Table } from './components/Table'

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

export interface Point {
	id: number
	x: number
	y: number
}

const points: Point[] = [
	{ id: 1, x: 3, y: -4 },
	{ id: 2, x: 8, y: 6 },
	{ id: 3, x: -12, y: -5 },
]

// | x    |   y   |  distance  |
// -----------------------------
// | 3    |  -4   |     5      |
// | 8    |   6   |    10      |
// | -12  |  -5   |    13      |
// -----------------------------

// | fullname     |  age  |
// ------------------------
// | Qwer Jjigirt |  15   |
// | Luu Ugyy     |  28   |
// ------------------------

interface User {
	id: number
	firstName: string
	lastName: string
	birthYear: number
}

const personsColumns = [
	{
		title: 'Full Name',
		render: (person: User) => person.firstName + ' ' + person.lastName,
		comparator: (a: User, b: User) => a.lastName.localeCompare(b.lastName),
	},
	{
		title: 'Age',
		render: (person: User) =>
			String(new Date().getFullYear() - person.birthYear),
		comparator: (a: User, b: User) => a.birthYear - b.birthYear,
	},
]

// const pointsHeaders = ['x', 'y', 'distance']

function App() {
	return (
		<Table
			data={users}
			columns={personsColumns}
		/>
	)
}

export default App
