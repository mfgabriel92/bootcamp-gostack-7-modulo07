import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { addToCartSuccess, updateAmount } from './actions'
import { formatPrice } from '../../../util/format'
import Api from '../../../services/api'
import types from './types'

function* addToCart({ id }) {
  const existing = yield select(state => state.cart.find(p => p.id === id))

  if (!existing) {
    const response = yield call(Api.get, `/products/${id}`)
    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    }

    yield put(addToCartSuccess(data))
  } else {
    yield put(updateAmount(id, existing.amount + 1))
  }
}

export default all([takeLatest(types.ADD_TO_CART, addToCart)])
