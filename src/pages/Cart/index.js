import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdCheck,
} from 'react-icons/md'
import { Container, Products, Actions, Footer, Total } from './styles'

const Cart = () => {
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
        <tbody>
          <tr>
            <td>
              <img
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zgcvRMRk2fek23hQ6AgW2QHaHa%26pid%3DApi&f=1"
                alt="Shoes"
              />
            </td>
            <td>
              <strong>Very cool shoes</strong>
              <span>$999,00</span>
            </td>
            <td>
              <Actions>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="text" value={1} readOnly />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </Actions>
            </td>
            <td>
              <strong>$999,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
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

export default Cart
