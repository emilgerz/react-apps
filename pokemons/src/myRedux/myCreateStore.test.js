import { myCreateStore } from './myCreateStore'
import { myApplyMiddleware } from './myApplyMiddleware'

import { createStore, applyMiddleware } from 'redux'
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

  it('should call subscriber when dispatch is called', () => {
    function reducer(state, action) {
      if (action.type === 'INCREMENT') {
        return state + 1
      }

      return state
    }

    const store = myCreateStore(reducer, 0)
    const s1 = jest.fn()

    store.subscribe(s1)
    store.dispatch({ type: 'INCREMENT12' })

    expect(s1).toHaveBeenCalledTimes(1)
  })

  it('should support multiple subscribers', () => {
    function reducer(state, action) {
      if (action.type === 'INCREMENT') {
        return state + 1
      }

      return state
    }

    const store = myCreateStore(reducer, 0)
    const s1 = jest.fn()
    const s2 = jest.fn()

    store.subscribe(s1)
    store.subscribe(s2)
    store.dispatch({ type: 'INCREMENT12' })

    expect(s1).toHaveBeenCalledTimes(1)
    expect(s2).toHaveBeenCalledTimes(1)
  })

  it('should be able to unsubscribe subscriber', () => {
    function reducer(state, action) {
      if (action.type === 'INCREMENT') {
        return state + 1
      }

      return state
    }

    const store = myCreateStore(reducer, 0)
    const s1 = jest.fn()
    const s2 = jest.fn()

    const unsubscribe1 = store.subscribe(s1)
    store.subscribe(s2)

    store.dispatch({ type: 'INCREMENT12' })
    expect(s1).toHaveBeenCalledTimes(1)
    expect(s2).toHaveBeenCalledTimes(1)

    unsubscribe1()

    store.dispatch({ type: 'INCREMENT12' })
    expect(s1).toHaveBeenCalledTimes(1)
    expect(s2).toHaveBeenCalledTimes(2)
  })

  it('should support enhancer', () => {
    function reducer(state, action) {
      if (action.type === 'INCREMENT') {
        return { ...state, a: state.a + 1 }
      }

      return state
    }

    function myEnhancer(createStore) {
      return function (reducer, initialState) {
        const origignalStore = createStore(reducer, initialState)

        const origignalGetState = origignalStore.getState

        let counter = 0
        origignalStore.getState = () => {
          counter++
          const originalState = origignalGetState()
          const state = {
            ...originalState,
            counter,
          }
          return state
        }

        return origignalStore
      }
    }

    const store = myCreateStore(reducer, { a: 0 }, myEnhancer)

    expect(store.getState()).toEqual({ a: 0, counter: 1 })
    expect(store.getState()).toEqual({ a: 0, counter: 2 })
    expect(store.getState()).toEqual({ a: 0, counter: 3 })
    expect(store.getState()).toEqual({ a: 0, counter: 4 })
  })
})

describe('myApplyMiddleware', () => {
  it('should compose middlewares', () => {
    function reducer(state, action) {
      if (action.type === 'INCREMENT') {
        return state + 1
      }

      return state
    }

    const f1 = jest.fn()
    const f2 = jest.fn()
    const f3 = jest.fn()

    const m1 = (storeApi) => (next) => (action) => {
      console.log('m1')
      f1()
      return next(action)
    }

    const m2 = (storeApi) => (next) => (action) => {
      console.log('m2')
      f2()
      return next(action)
    }
    const m3 = (storeApi) => (next) => (action) => {
      console.log('m3')
      f3()
      return next(action)
    }

    const applyMiddlewareEnhancer = myApplyMiddleware(m1, m2, m3)

    const store = myCreateStore(reducer, 0, applyMiddlewareEnhancer)

    store.dispatch({ type: 'INCREMENT' })

    expect(f1).toHaveBeenCalledTimes(1)
    expect(f2).toHaveBeenCalledTimes(1)
    expect(f3).toHaveBeenCalledTimes(1)
  })
})
