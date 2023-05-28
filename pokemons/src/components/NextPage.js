import './NextPage.css'

export function NextPage({ prevPage, nextPage, page }) {
	return (
		<>
			{page > 0 && (
				<button
					onClick={prevPage}
					className="next-page-button grid-prev-btn"
				>
					Предыдущая страница
				</button>
			)}

			<p className="page-line">
				Страница <span>{page + 1}</span>
			</p>

			<button
				onClick={nextPage}
				className="next-page-button grid-next-btn"
			>
				Следующая страница
			</button>
		</>
	)
}
