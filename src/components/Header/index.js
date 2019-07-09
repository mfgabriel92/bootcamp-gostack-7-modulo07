import { connect } from 'react-redux'
import Header from './Header'

const mapStateToProps = state => ({
  cartQtd: state.cart.length,
})

export default connect(mapStateToProps)(Header)
