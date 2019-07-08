import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { Container, List, Item, Info, Button } from './styles'

const Home = () => {
  return (
    <Container>
      <List>
        <Item>
          <img
            src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zgcvRMRk2fek23hQ6AgW2QHaHa%26pid%3DApi&f=1"
            alt=""
          />

          <Info>
            <strong>Very nice shoes</strong>
            <span>$999,00</span>
          </Info>

          <Button>
            <div>
              <MdAddShoppingCart size={22} color="#FFF" /> 1
            </div>

            <span>Add to Cart</span>
          </Button>
        </Item>
        <Item>
          <img
            src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zgcvRMRk2fek23hQ6AgW2QHaHa%26pid%3DApi&f=1"
            alt=""
          />
          <Info>
            <strong>Very nice shoes</strong>
            <span>$999,00</span>
          </Info>

          <Button>
            <div>
              <MdAddShoppingCart size={22} color="#FFF" /> 1
            </div>

            <span>Add to Cart</span>
          </Button>
        </Item>
        <Item>
          <img
            src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zgcvRMRk2fek23hQ6AgW2QHaHa%26pid%3DApi&f=1"
            alt=""
          />
          <Info>
            <strong>Very nice shoes</strong>
            <span>$999,00</span>
          </Info>

          <Button>
            <div>
              <MdAddShoppingCart size={22} color="#FFF" /> 1
            </div>

            <span>Add to Cart</span>
          </Button>
        </Item>
        <Item>
          <img
            src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zgcvRMRk2fek23hQ6AgW2QHaHa%26pid%3DApi&f=1"
            alt=""
          />
          <Info>
            <strong>Very nice shoes</strong>
            <span>$999,00</span>
          </Info>

          <Button>
            <div>
              <MdAddShoppingCart size={22} color="#FFF" /> 1
            </div>

            <span>Add to Cart</span>
          </Button>
        </Item>
      </List>
    </Container>
  )
}

export default Home
