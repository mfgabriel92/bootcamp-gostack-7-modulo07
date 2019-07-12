import React from 'react'
import { useSelector } from 'react-redux'
import { MdShoppingCart } from 'react-icons/md'
import { Container, Logo, Cart } from './styles'
import logo from '../../assets/logo.png'

const Header = () => {
  const cartQtd = useSelector(state => state.cart.length)

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

export default Header
