import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'
import { formatPrice } from '../../util/format'
import { Container, List, Item, Info, Button } from './styles'
import { addToCart } from '../../store/reducers/cart/actions'
import Api from '../../services/api'

const Home = () => {
  const [products, setProducts] = useState([])
  const amount = useSelector(state =>
    state.cart.reduce((sum, product) => {
      sum[product.id] = product.amount || 0
      return sum
    }, {})
  )
  const dispatch = useDispatch()

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

            <Button onClick={() => dispatch(addToCart(product.id))}>
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

export default Home
