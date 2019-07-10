import { connect } from 'react-redux'
import Cart from './Cart'
import { formatPrice } from '../../util/format'
import { removeFromCart, updateAmount } from '../../store/reducers/cart/actions'

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0)
  ),
})

const mapDispatchToProps = {
  removeFromCart,
  updateAmount,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
