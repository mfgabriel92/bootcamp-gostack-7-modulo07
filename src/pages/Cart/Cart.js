import React from 'react'
import PropTypes from 'prop-types'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdCheck,
} from 'react-icons/md'
import { Container, Products, Actions, Footer, Total } from './styles'

const Cart = ({ cart, total, updateAmount, removeFromCart }) => {
  const increment = ({ id, amount }) => {
    updateAmount(id, amount + 1)
  }

  const decrement = ({ id, amount }) => {
    updateAmount(id, amount - 1)
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
          <button type="button" onClick={() => removeFromCart(product.id)}>
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

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmount: PropTypes.func.isRequired,
}

export default Cart
