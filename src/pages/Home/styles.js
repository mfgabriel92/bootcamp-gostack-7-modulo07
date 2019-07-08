import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div``

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
  padding: 15px;

  img {
    width: 100%;
    align-self: center;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong,
  > span {
    color: #333;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    margin-top: 15px;
    display: block;
  }

  > span {
    font-size: 22px;
    font-weight: bold;
    margin: 7px 0 20px;
  }
`

export const Button = styled.button.attrs({
  type: 'button',
})`
  background: #7159c1;
  color: #fff;
  border: 0;
  overflow: hidden;
  margin-top: auto;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${darken(0.05, '#7159c1')};
  }

  div {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.1);

    svg {
      margin-right: 5px;
    }
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
`
