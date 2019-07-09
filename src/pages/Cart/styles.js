import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 20px;
  background: #fff;
`

export const Products = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    &:first-child,
    &:last-child {
      width: 0;
    }

    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 130px;
    margin-right: 15px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: #777;
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;

  input {
    border: 1px solid #fff;
    width: 30px;
    height: 35px;
    font-weight: bold;
    color: #333;
    text-align: center;
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`

export const Footer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
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
  }
`

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #777;
    font-weight: bold;
  }

  strong {
    font-size: 26px;
    font-weight: bold;
    color: #333;
    margin-left: 5px;
  }
`
