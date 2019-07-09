import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MdAddShoppingCart } from 'react-icons/md'
import { Container, List, Item, Info, Button } from './styles'
import Api from '../../services/api'
import { formatPrice } from '../../util/format'

class Home extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await Api.get('/products')
    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }))

    this.setState({ products: data })
  }

  handleAddToCart = product => {
    const { addToCart } = this.props
    addToCart(product)
  }

  render() {
    const { products } = this.state

    return (
      <Container>
        <List>
          {products.map(product => (
            <Item key={product.id}>
              <img src={product.image} alt={product.title} />

              <Info>
                <strong>{product.title}</strong>
                <span>{product.formattedPrice}</span>
              </Info>

              <Button onClick={() => this.handleAddToCart(product)}>
                <div>
                  <MdAddShoppingCart size={22} color="#FFF" /> 1
                </div>

                <span>Add to Cart</span>
              </Button>
            </Item>
          ))}
        </List>
      </Container>
    )
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
}

export default Home
