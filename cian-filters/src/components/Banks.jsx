/* eslint-disable react/prop-types */
import { bankList } from '../data/bankList'

export function Banks({ banksChecked, setBanksChecked }) {
	//
	const checkboxHandler = (bankId) => {
		if (banksChecked.includes(bankId)) {
			setBanksChecked(banksChecked.filter((bank) => bank !== bankId))
		} else {
			setBanksChecked([...banksChecked, bankId])
		}
	}

	const bankIDS = Object.keys(bankList)

	return (
		<div className="banks">
			<h3>Банки</h3>

			<div className="input__checkbox-group">
				{bankIDS.map((bank) => (
					<label
						className="input__checkbox-group__checkbox"
						key={bank}
					>
						<input
							type="checkbox"
							name="bank"
							id={bank}
							checked={banksChecked.includes(bank)}
							onChange={() => checkboxHandler(bank)}
						/>
						{bankList[bank].name}
						<div className="input__checkbox-group__checkbox__btn">
							<img src={bankList[bank].img} />
						</div>
					</label>
				))}
			</div>
		</div>
	)
}
