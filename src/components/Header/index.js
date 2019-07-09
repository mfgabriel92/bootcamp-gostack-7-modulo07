import { connect } from 'react-redux'
import Header from './Header'

const stateToProps = state => ({
  cartQtd: state.cart.length,
})

export default connect(stateToProps)(Header)
