import { combineReducers } from 'redux'
import auth from './Auth/store/auth'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    authentication : auth,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
