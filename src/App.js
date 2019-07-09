import './config/reactotron'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './components/Header'
import Routes from './routes'
import Style from './styles/app'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <Style />
      </BrowserRouter>
    </Provider>
  )
}

export default App