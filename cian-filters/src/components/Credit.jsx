/* eslint-disable react/prop-types */
export function Credit({ creditState, setCreditState }) {
	const inputHandler = (value) => {
		const onlyDigits = value.replace(/\D/g, '')

		setCreditState(Number(onlyDigits))
	}

	return (
		<div className="credit">
			<label className="credit__input">
				<p>Кредит</p>

				<input
					className="input"
					type="text"
					value={creditState.toLocaleString('ru')}
					onChange={(e) => inputHandler(e.target.value)}
				/>

				<p className="input__unit">₽</p>
			</label>
		</div>
	)
}
