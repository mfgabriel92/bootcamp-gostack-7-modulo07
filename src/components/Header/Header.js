import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import PropTypes from 'prop-types'
import { Container, Logo, Cart } from './styles'
import logo from '../../assets/logo.png'

const Header = ({ cartQtd }) => {
  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Rocketshoes" />
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>{cartQtd} items</span>
        </div>
        <MdShoppingCart size={32} color="#FFF" />
      </Cart>
    </Container>
  )
}

Header.propTypes = {
  cartQtd: PropTypes.number,
}

Header.defaultProps = {
  cartQtd: 0,
}

export default Header
