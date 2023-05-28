export function InsuranceCheck({ setInsuraceOption, insuranceOption }) {
	return (
		<label
			className="insurance-check"
			htmlFor="insurance"
		>
			<input
				className="checkbox-2"
				name="insurance"
				id="insurance"
				checked={insuranceOption}
				type="checkbox"
				onChange={(e) => setInsuraceOption(e.target.checked)}
			/>
			Со страховской
		</label>
	)
}
