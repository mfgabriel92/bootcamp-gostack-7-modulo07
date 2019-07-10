import { connect } from 'react-redux'
import Home from './Home'
import { addToCart } from '../../store/reducers/cart/actions'

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount || 0
    return amount
  }, {}),
})

const mapDispatchToProps = {
  addToCart,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
