import { connect } from 'react-redux'
import Cart from './Cart'
import { removeFromCart, updateAmount } from '../../store/reducers/cart/actions'

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = {
  removeFromCart,
  updateAmount,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
