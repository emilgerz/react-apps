// const m1 = (storeApi) => (next) => (action) => {
//   console.log('m1')
//   return next(action)
// }

// const m2 = (storeApi) => (next) => (action) => {
//   console.log('m2')
//   return next(action)
// }

export const myApplyMiddleware = (...middlewares) => {
  return function myEnhancer(createStore) {
    return function (reducer, initialState) {
      const originalStore = createStore(reducer, initialState)

      const { dispatch, getState } = originalStore

      // const [m1, m2, m3] = middlewares

      // m1({ dispatch, getState })(m2({ dispatch, getState })(m3({ dispatch, getState })(dispatch)))(action)

      // ....

      // let mdwr = dispatch
      // mdwr = m3({ dispatch, getState })(mdwr)
      // mdwr = m2({ dispatch, getState })(mdwr)
      // mdwr = m1({ dispatch, getState })(mdwr)

      const mdwr = middlewares.reduceRight((acc, currMw) => currMw({ dispatch, getState })(acc), dispatch)

      function patchedDispatchPrev(action) {
        mdwr(action)
      }

      // const g = x => {
      //   return f(x);
      // }
      // const g = f;

      const patchedDispatch = middlewares.reduceRight((acc, currMw) => currMw({ dispatch, getState })(acc), dispatch)

      return {
        originalStore,
        dispatch: patchedDispatch,
      }
    }
  }
}

// <Provider store={store}>
//   <Component />
// </Provider>

// // const Component = connect(s => ({
// //   isVtb: s.isVtb,
// // }))(ComponentInner)

// const ComponentInner = () => {
//   const isVtb = useSelector(s => s.isVtb)
//   return (
//     <div>
//       {isVtb ? "новый текст для втб" : "старый теккс"}
//     </div>
//   )
// }
