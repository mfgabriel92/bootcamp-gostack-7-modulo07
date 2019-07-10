import types from './types'

export function addToCart(product) {
  return {
    type: types.ADD_TO_CART,
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
