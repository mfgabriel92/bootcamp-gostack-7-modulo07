import { call, put, all, takeLatest } from 'redux-saga/effects'
import Api from '../../../services/api'
import { addToCartSuccess } from './actions'
import types from './types'

function* addToCart({ id }) {
  const { data } = yield call(Api.get, `/products/${id}`)
  yield put(addToCartSuccess(data))
}

export default all([takeLatest(types.ADD_TO_CART, addToCart)])
