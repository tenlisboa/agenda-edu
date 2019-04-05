import React from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import { store } from './src/store'

import Login from './src/components/Login'

let RootStack = createStackNavigator({
  Login
})

const Navigation = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
