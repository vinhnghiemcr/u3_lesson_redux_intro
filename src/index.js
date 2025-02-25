import React from 'react'
import {createRoot} from 'react-dom/client'
import { Provider, provider } from 'react-redux'
import store from './store'
import './styles/index.css'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
