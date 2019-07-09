import produce from 'immer'

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const i = draft.findIndex(p => p.id === action.product.id)

        if (i !== -1) {
          draft[i].amount += 1
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          })
        }
      })
    default:
      return state
  }
}
