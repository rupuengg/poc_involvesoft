import { combineReducers } from 'redux'
import auth from './Auth/store/auth'
import uistateReducer from './Layouts/store/uistate'
import comm from './CreateCommunity/store/createCommunity'
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    authentication : auth,
    uistate: uistateReducer,
    create: comm, 
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
