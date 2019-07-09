import { createStore, combineReducers } from 'redux'
import cart from './reducers/cart'

const rootReducer = combineReducers({
  cart,
})

export default createStore(rootReducer)
