import types from './types'

export function addToCart(id) {
  return {
    type: types.ADD_TO_CART,
    id,
  }
}

export function addToCartSuccess(product) {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    product,
  }
}

export function removeFromCart(id) {
  return {
    type: types.REMOVE_FROM_CART,
    id,
  }
}

export function updateAmount(id, amount) {
  return {
    type: types.UPDATE_AMOUNT,
    id,
    amount,
  }
}
