import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdCheck,
} from 'react-icons/md'
import { formatPrice } from '../../util/format'
import { removeFromCart, updateAmount } from '../../store/reducers/cart/actions'
import { Container, Products, Actions, Footer, Total } from './styles'

const Cart = () => {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sum, product) => {
        return sum + product.price * product.amount
      }, 0)
    )
  )
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  )
  const dispatch = useDispatch()

  const increment = ({ id, amount }) => {
    dispatch(updateAmount(id, amount + 1))
  }

  const decrement = ({ id, amount }) => {
    dispatch(updateAmount(id, amount - 1))
  }

  const remove = ({ id }) => {
    dispatch(removeFromCart(id))
  }

  const renderCart = () => {
    if (cart.length === 0) {
      return (
        <tr style={{ textAlign: 'center', color: '#333' }}>
          <td colSpan={5} style={{ padding: 50 }}>
            Empty
          </td>
        </tr>
      )
    }

    return cart.map(product => (
      <tr key={product.id}>
        <td>
          <img src={product.image} alt="Shoes" />
        </td>
        <td>
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>
        </td>
        <td>
          <Actions>
            <button type="button" onClick={() => decrement(product)}>
              <MdRemoveCircleOutline size={20} color="#7159c1" />
            </button>
            <input type="text" value={product.amount} readOnly />
            <button type="button" onClick={() => increment(product)}>
              <MdAddCircleOutline size={20} color="#7159c1" />
            </button>
          </Actions>
        </td>
        <td>
          <strong>{product.subtotal}</strong>
        </td>
        <td>
          <button type="button" onClick={() => remove(product)}>
            <MdDelete size={20} color="#7159c1" />
          </button>
        </td>
      </tr>
    ))
  }

  return (
    <Container>
      <Products>
        <thead>
          <th />
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th />
        </thead>
        <tbody>{renderCart()}</tbody>
      </Products>

      {cart.length > 0 && (
        <Footer>
          <button type="button">
            <div>
              <MdCheck size={22} color="#fff" />
              <span>Proceed</span>
            </div>
          </button>
          <Total>
            <span>Total</span>
            <strong>{total}</strong>
          </Total>
        </Footer>
      )}
    </Container>
  )
}

export default Cart
