import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

import 'normalize.css/normalize.css'
import '@reach/slider/styles.css'
import './styles/styles.scss'

import App from './app'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
