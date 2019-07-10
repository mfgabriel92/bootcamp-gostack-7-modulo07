import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import cart from './reducers/cart/index'

const rootReducer = combineReducers({
  cart,
})
const sagaMiddleware = createSagaMiddleware()

let enhancer = applyMiddleware(sagaMiddleware)
if (process.env.NODE_ENV === 'development') {
  enhancer = compose(
    console.tron.createEnhancer(),
    applyMiddleware(sagaMiddleware)
  )
}

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
