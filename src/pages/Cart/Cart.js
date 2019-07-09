import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdCheck,
} from 'react-icons/md'
import { Container, Products, Actions, Footer, Total } from './styles'

class Cart extends Component {
  renderCart = () => {
    const { cart } = this.props

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
      <tr>
        <td>
          <img src={product.image} alt="Shoes" />
        </td>
        <td>
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>
        </td>
        <td>
          <Actions>
            <button type="button">
              <MdRemoveCircleOutline size={20} color="#7159c1" />
            </button>
            <input type="text" value={product.amount} readOnly />
            <button type="button">
              <MdAddCircleOutline size={20} color="#7159c1" />
            </button>
          </Actions>
        </td>
        <td>
          <strong>{product.formattedPrice}</strong>
        </td>
        <td>
          <button type="button">
            <MdDelete size={20} color="#7159c1" />
          </button>
        </td>
      </tr>
    ))
  }

  render() {
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
          <tbody>{this.renderCart()}</tbody>
        </Products>

        <Footer>
          <button type="button">
            <div>
              <MdCheck size={22} color="#fff" />
              <span>Proceed</span>
            </div>
          </button>
          <Total>
            <span>Total</span>
            <strong>$999,00</strong>
          </Total>
        </Footer>
      </Container>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.shape().isRequired,
}

export default Cart
