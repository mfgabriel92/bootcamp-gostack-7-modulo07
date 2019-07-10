import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { addToCartSuccess, updateAmountSuccess } from './actions'
import { formatPrice } from '../../../util/format'
import Api from '../../../services/api'
import types from './types'

function* addToCart({ id }) {
  const existing = yield select(state => state.cart.find(p => p.id === id))
  const stock = yield call(Api.get, `/stock/${id}`)
  const currentAmount = existing ? existing.amount : 0
  const amount = currentAmount + 1

  if (amount > stock.data.amount) {
    toast.error('Product quantity out of stock!')
    return
  }

  if (existing) {
    yield put(updateAmountSuccess(id, amount))
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

function* updateAmount({ id, amount }) {
  if (amount <= 0) return

  const stock = yield call(Api.get, `/stock/${id}`)

  if (amount > stock.data.amount) {
    toast.error('Product quantity out of stock!')
    return
  }

  yield put(updateAmountSuccess(id, amount))
}

export default all([
  takeLatest(types.ADD_TO_CART, addToCart),
  takeLatest(types.UPDATE_AMOUNT, updateAmount),
])
