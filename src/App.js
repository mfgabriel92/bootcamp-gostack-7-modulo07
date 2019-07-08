import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Style from './styles/app'

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Style />
    </BrowserRouter>
  )
}

export default App
