export function InputNumber(props) {
	const { title, radioGroup, value, onChange, inputUnit, rangeMinMax, radioId } = props

	const inputHandler = (value) => {
		const onlyDigits = value.replace(/\D/g, '')

		const notUpperThanMax = Math.min(rangeMinMax.max, onlyDigits)
		const notAboveZero = Math.max(0, notUpperThanMax)

		if (notAboveZero === 0) {
			onChange(null)
			return
		}

		onChange(notAboveZero)
	}

	return (
		<div className="initial-fee">
			<label
				className="initial-fee__input"
				id="initialFee"
				name="initialFee"
			>
				<p>{title}</p>

				<input
					className="input"
					type="text"
					value={value}
					onChange={(e) => inputHandler(e.target.value)}
				/>

				<p className="input__unit">{inputUnit}</p>

				<input
					className="input__range"
					type="range"
					id="initialFeeRange"
					name="initialFee"
					min={rangeMinMax.min}
					max={rangeMinMax.max}
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>

				<div className="radio-group_2">
					{radioGroup.map((radio, i) => (
						<div key={i}>
							<input
								className="input__radio__btn"
								type="radio"
								id={radioId + radio}
								value={radio}
								name={radioId}
								checked={value === radio}
								onChange={(e) => onChange(e.target.value)}
							/>
							<label
								className="input__radio__btn__label"
								htmlFor={radioId + radio}
							>
								{`${radio}${inputUnit}`}
							</label>
						</div>
					))}
				</div>
			</label>
		</div>
	)
}
