import { bankList } from '../data/bankList'

export function Offer(props) {
	const { bankId, product, rate, maxAmount, minInitialPayment, offerId } = props

	const productParse = {
		USED: 'Вторичка',
		NEW: 'Новостройка',
	}

	return (
		<div
			className="offer__container"
			// key={offerId}
		>
			<div className="offer__heading">
				<div className="offer__heading__container">
					<h4>{bankList[bankId]?.name}</h4>
					<p>{productParse[product]}</p>
				</div>

				<img src={bankList[bankId]?.img} />
			</div>

			<div className="offer__features">Some Feutures ✨</div>

			<div className="offer__props">
				<div className="offer__props__item">
					<h6>Ставка</h6>
					<p>
						{`${(rate * 100).toLocaleString('ru', {
							style: 'decimal',
							minimumFractionDigits: 0,
							maximumFractionDigits: 2,
						})}%`}
					</p>
				</div>

				<div className="offer__props__item">
					<h6>Макс. кредит</h6>
					<p>
						{`${(maxAmount / 1_000_000).toLocaleString('ru', {
							style: 'decimal',
							minimumFractionDigits: 0,
							maximumFractionDigits: 1,
						})} млн ₽`}
					</p>
				</div>

				<div className="offer__props__item">
					<h6>Взнос от</h6>
					<p>{minInitialPayment * 100}%</p>
				</div>
			</div>

			<button className="offer__accept">Подробнее</button>
		</div>
	)
}
