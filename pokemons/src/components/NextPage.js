import { useDispatch } from 'react-redux'
import './NextPage.css'

export function NextPage({ page }) {
	const dispatch = useDispatch()

	return (
		<>
			{page > 0 && (
				<button
					onClick={() => dispatch({ type: 'PAGE_BACK' })}
					className="next-page-button grid-prev-btn"
				>
					Предыдущая страница
				</button>
			)}

			<p className="page-line">
				Страница <span>{page + 1}</span>
			</p>

			<button
				onClick={() => dispatch({ type: 'PAGE_FORWARD' })}
				className="next-page-button grid-next-btn"
			>
				Следующая страница
			</button>
		</>
	)
}
