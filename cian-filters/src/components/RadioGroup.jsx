export function RadioGroup({ title, options, onChange, value, name }) {
	return (
		<div className="property-type">
			<h3>{title}</h3>

			<div className="radio-group">
				{options.map((input) => (
					<label key={input.id}>
						<input
							className="input__radio"
							name={name}
							checked={value === input.id}
							type="radio"
							value={input.id}
							onChange={(e) => onChange(e.target.value)}
						/>
						{input.label}
					</label>
				))}
			</div>
		</div>
	)
}
