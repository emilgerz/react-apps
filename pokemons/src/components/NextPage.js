import { useDispatch } from 'react-redux'
import styles from './NextPage.module.css'

export function NextPage({ page }) {
	const dispatch = useDispatch()

	return (
		<>
			{page > 0 && (
				<button
					onClick={() => dispatch({ type: 'PAGE_BACK' })}
					className={`${styles.nextPageButton} ${styles.gridPrevBtn}`}
				>
					Предыдущая страница
				</button>
			)}

			<p className={styles.pageLine}>
				Страница <span>{page + 1}</span>
			</p>

			<button
				onClick={() => dispatch({ type: 'PAGE_FORWARD' })}
				className={`${styles.nextPageButton} ${styles.gridNextBtn}`}
			>
				Следующая страница
			</button>
		</>
	)
}
