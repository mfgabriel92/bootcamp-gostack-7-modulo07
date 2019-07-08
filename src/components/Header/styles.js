import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0 45px;
`

export const Logo = styled(Link)`
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }
`

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }

  div {
    text-align: right;
    margin-right: 15px;

    strong {
      display: block;
    }

    span {
      font-size: 12px;
      color: #aaa;
    }
  }
`
