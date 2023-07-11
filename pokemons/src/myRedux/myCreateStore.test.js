// import { myCreateStore } from './myCreateStore'

// import { createStore } from 'redux'
// const myCreateStore = createStore

// import { expect } from 'jest';

describe('myCreateStore', () => {
	it('should return object with 3 properties: getState, dispatch, subscribe', () => {
		const store = myCreateStore((s) => s)

		// expect(Object.keys(store)).toHaveLength(3)
		expect(store).toHaveProperty('getState')
		expect(store).toHaveProperty('dispatch')
		expect(store).toHaveProperty('subscribe')
	})

	it('should set second argument as initial state', () => {
		const store = myCreateStore((s) => s, 123)
		const state = store.getState()

		expect(state).toBe(123)
	})

	it('should change state when dispatch is called', () => {
		function reducer(state, action) {
			if (action.type === 'INCREMENT') {
				return state + 1
			}

			return state
		}
		const store = myCreateStore(reducer, 0)

		store.dispatch({ type: 'INCREMENT' })

		const state = store.getState()
		expect(state).toBe(1)
	})
})
