import produce from 'immer'
import types from './types'

export default function cart(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_CART_SUCCESS:
      return produce(state, draft => {
        draft.push(action.product)
      })
    case types.REMOVE_FROM_CART:
      return produce(state, draft => {
        const i = draft.findIndex(p => p.id === action.id)

        if (i !== -1) {
          draft.splice(i, 1)
        }
      })
    case types.UPDATE_AMOUNT_SUCCESS: {
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
