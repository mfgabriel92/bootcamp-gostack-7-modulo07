import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { Container, Logo, Cart } from './styles'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Rocketshoes" />
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>0 items</span>
        </div>
        <MdShoppingCart size={32} color="#FFF" />
      </Cart>
    </Container>
  )
}

export default Header
