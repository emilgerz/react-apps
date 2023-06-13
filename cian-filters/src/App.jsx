import 'modern-css-reset'
import './App.scss'
import { useState } from 'react'
import { ButtonClose } from './components/misc/ButtonClose'
import { Credit } from './components/Credit'
import { Banks } from './components/Banks'
import { RadioGroup } from './components/RadioGroup'
import { InsuranceCheck } from './components/InsuranseCheck'
import { InputNumber } from './components/InputNumber'
import { propertyTypeLabels, homeTypeLabels } from './data/typeLabels'
import { Offer } from './components/Offer'
import data from './data/response.json'
import { CSSTransition } from 'react-transition-group'

const offerFilter = (options, data) => {
	const {
		creditState,
		initialFeeState,
		creditTerm,
		banksChecked,
		propertyType,
		homeType,
		insuranceOption,
	} = options

	return data.filter((offer) => {
		const banksAllowed = !banksChecked.length || banksChecked.includes(offer.bankId)
		const creditAllowed = creditState >= offer.minAmount
		const initialFeeAllowed = !initialFeeState || initialFeeState >= offer.minInitialPayment * 100
		const creditTermAllowed = !creditTerm || creditTerm * 12 >= offer.minTerm
		const propertyTypeAllowed = propertyType === 'ALL' || propertyType === offer.product
		const homeTypeAllowed =
			homeType === offer.requirements.find((prop) => prop.key === 'PROPERTY_TYPE').value
		const insuranceAllowed =
			insuranceOption === offer.requirements.find((prop) => prop.key === 'INSURANCE')?.value

		return (
			banksAllowed &&
			creditAllowed &&
			initialFeeAllowed &&
			creditTermAllowed &&
			propertyTypeAllowed &&
			homeTypeAllowed &&
			insuranceAllowed
		)
	})
}

function App() {
	const [creditState, setCreditState] = useState(1_000_000) // null или число
	const [initialFeeState, setInitialFeeState] = useState(null) // null или число
	const [creditTerm, setCreditTerm] = useState(null) // null или число
	const [banksChecked, setBanksChecked] = useState([]) // массив банков
	const [propertyType, setPropertyType] = useState('property-type-all')
	const [homeType, setHomeType] = useState('home-type-house')
	const [insuranceOption, setInsuraceOption] = useState(false)

	const states = {
		creditState,
		initialFeeState,
		creditTerm,
		banksChecked,
		propertyType,
		homeType,
		insuranceOption,
	}

	const filteredOffers = offerFilter(states, data.offers)

	return (
		<div className="app">
			<div className="scroll-container">
				<div className="popup">
					<div className="popup__heading">
						<h2 className="heading">Настройка ипотеки</h2>

						<button className="btn-exit">
							<ButtonClose />
						</button>
					</div>

					<div className="popup__content">
						<Credit
							creditState={creditState}
							setCreditState={setCreditState}
						/>

						<InputNumber
							title="Первоначальный взнос"
							radioGroup={['10', '15', '20', '25', '30']}
							radioId="initialFee"
							rangeMinMax={{ min: 10, max: 90 }}
							inputUnit="%"
							value={initialFeeState}
							onChange={setInitialFeeState}
						/>

						<InputNumber
							title="Срок кредита"
							radioGroup={['5', '10', '15', '20']}
							radioId="feeTerm"
							rangeMinMax={{ min: 1, max: 30 }}
							inputUnit="лет"
							value={creditTerm}
							onChange={setCreditTerm}
						/>

						<Banks
							banksChecked={banksChecked}
							setBanksChecked={setBanksChecked}
						/>

						<RadioGroup
							title="Тип объекта"
							options={propertyTypeLabels}
							onChange={setPropertyType}
							value={propertyType}
							name="property-type"
						/>

						<RadioGroup
							title="Тип жилья"
							options={homeTypeLabels}
							onChange={setHomeType}
							value={homeType}
							name="home-type"
						/>

						<InsuranceCheck
							setInsuraceOption={setInsuraceOption}
							insuranceOption={insuranceOption}
						/>
					</div>
				</div>
			</div>

			<div className="offer">
				{filteredOffers.map((offer) => (
					<CSSTransition
						key={offer.offerId}
						in={true}
						appear={true}
						timeout={400}
						classNames="incoming-card"
					>
						<Offer {...offer} />
					</CSSTransition>
				))}
			</div>
		</div>
	)
}

export default App
