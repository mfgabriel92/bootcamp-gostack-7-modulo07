import { createStore, combineReducers } from 'redux'
import cart from './reducers/cart'

const rootReducer = combineReducers({
  cart,
})

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null

export default createStore(rootReducer, enhancer)
