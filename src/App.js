import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Routes from './routes'
import Style from './styles/app'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Style />
    </BrowserRouter>
  )
}

export default App
