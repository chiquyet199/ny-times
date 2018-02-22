import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'configs/store'
import HomeScreen from 'screens/Home'
import 'assets/stylesheets/base.scss'

render(
  <Provider store={store}>
    <HomeScreen />
  </Provider>,
  document.getElementById('root'),
)
