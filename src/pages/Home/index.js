import { connect } from 'react-redux'
import Home from './Home'
import { addToCart } from '../../store/reducers/cart/actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  addToCart,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
