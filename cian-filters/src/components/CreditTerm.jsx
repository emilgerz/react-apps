export function CreditTerm({ creditTerm, setCreditTerm }) {
	const inputHandler = (value) => {
		const onlyNumber = value.replace(/\D/g, '')

		const notLessOne = Math.max(1, Number(onlyNumber))
		const notAbove30 = Math.min(30, notLessOne)

		setCreditTerm(notAbove30)
	}

	return (
		<div className="initial-fee">
			<label
				className="initial-fee__input"
				id="initialFee"
				name="initialFee"
			>
				<p>Срок кредита</p>

				<input
					className="input"
					type="text"
					value={creditTerm}
					onChange={(e) => inputHandler(e.target.value)}
				/>

				<p className="input__unit">лет</p>

				<input
					className="input__range"
					type="range"
					id="CreditTermFeeRange"
					name="CreditTerm"
					min={1}
					max={30}
					value={creditTerm}
					onChange={(e) => setCreditTerm(e.target.value)}
				/>

				<div className="radio-group_2">
					<div>
						<input
							className="input__radio__btn"
							type="radio"
							id="CreditTerm5"
							value={5}
							name="CreditTerm"
							defaultChecked
							onChange={(e) => setCreditTerm(e.target.value)}
						/>
						<label
							className="input__radio__btn__label"
							htmlFor="CreditTerm5"
						>
							5 лет
						</label>
					</div>

					<div>
						<input
							className="input__radio__btn"
							type="radio"
							id="CreditTerm10"
							value={10}
							name="CreditTerm"
							onChange={(e) => setCreditTerm(e.target.value)}
						/>
						<label
							className="input__radio__btn__label"
							htmlFor="CreditTerm10"
						>
							10 лет
						</label>
					</div>

					<div>
						<input
							className="input__radio__btn"
							type="radio"
							id="CreditTerm15"
							value={15}
							name="CreditTerm"
							onChange={(e) => setCreditTerm(e.target.value)}
						/>
						<label
							className="input__radio__btn__label"
							htmlFor="CreditTerm15"
						>
							15 лет
						</label>
					</div>

					<div>
						<input
							className="input__radio__btn"
							type="radio"
							id="CreditTerm20"
							value={20}
							name="CreditTerm"
							onChange={(e) => setCreditTerm(e.target.value)}
						/>
						<label
							className="input__radio__btn__label"
							htmlFor="CreditTerm20"
						>
							20 лет
						</label>
					</div>
				</div>
			</label>
		</div>
	)
}
