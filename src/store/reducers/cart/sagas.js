import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { addToCartSuccess, updateAmount } from './actions'
import { formatPrice } from '../../../util/format'
import Api from '../../../services/api'
import types from './types'

function* addToCart({ id }) {
  const existing = yield select(state => state.cart.find(p => p.id === id))
  const stock = yield call(Api.get, `/stock/${id}`)
  const currentAmount = existing ? existing.amount : 0
  const amount = currentAmount + 1

  if (amount > stock.data.amount) {
    console.tron.warn('Error. Product not in stock')
    return
  }

  if (existing) {
    yield put(updateAmount(id, amount))
    return
  }

  const response = yield call(Api.get, `/products/${id}`)
  const data = {
    ...response.data,
    amount: 1,
    formattedPrice: formatPrice(response.data.price),
  }

  yield put(addToCartSuccess(data))
}

export default all([takeLatest(types.ADD_TO_CART, addToCart)])
