import { all } from 'redux-saga/effects'
import cart from './reducers/cart/sagas'

export default function* rootSaga() {
  return yield all([cart])
}
