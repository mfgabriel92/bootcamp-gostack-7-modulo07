import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MdAddShoppingCart } from 'react-icons/md'
import { Container, List, Item, Info, Button } from './styles'
import Api from '../../services/api'
import { formatPrice } from '../../util/format'

const Home = ({ amount, addToCart }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const response = await Api.get('/products')
      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }))

      setProducts(data)
    }

    loadProducts()
  }, [])

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

            <Button onClick={() => addToCart(product.id)}>
              <div>
                <MdAddShoppingCart size={22} color="#FFF" />
                {amount[product.id] || 0}
              </div>

              <span>Add to Cart</span>
            </Button>
          </Item>
        ))}
      </List>
    </Container>
  )
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  amount: PropTypes.object.isRequired,
}

export default Home
