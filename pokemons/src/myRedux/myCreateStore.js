export const myCreateStore = (reducer, initialState, enhancer) => {
  if (enhancer !== undefined) {
    return enhancer(myCreateStore)(reducer, initialState)
  }

  let state = initialState
  let subscribeListener = []

  return {
    getState: () => {
      return state
    },

    subscribe: (fn) => {
      subscribeListener.push(fn)

      return () => {
        subscribeListener = subscribeListener.filter((func) => func !== fn)
      }
    },

    dispatch: (action) => {
      state = reducer(state, action)

      subscribeListener.forEach((fn) => fn())
    },
  }
}
