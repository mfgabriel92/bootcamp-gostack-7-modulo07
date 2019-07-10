import produce from 'immer'
import types from './types'

export default function cart(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return produce(state, draft => {
        const i = draft.findIndex(p => p.id === action.id)

        if (i !== -1) {
          draft[i].amount += 1
          draft[i].totalPrice = draft[i].price * draft[i].amount
        } else {
          draft.push({
            ...action.product,
            amount: 1,
            totalPrice: action.product.price,
          })
        }
      })
    case types.REMOVE_FROM_CART:
      return produce(state, draft => {
        const i = draft.findIndex(p => p.id === action.id)

        if (i !== -1) {
          draft.splice(i, 1)
        }
      })
    case types.UPDATE_AMOUNT: {
      if (action.amount <= 0) {
        return state
      }

      return produce(state, draft => {
        const i = draft.findIndex(p => p.id === action.id)

        if (i !== -1) {
          draft[i].amount = Number(action.amount)
        }
      })
    }
    default:
      return state
  }
}
