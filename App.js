import React from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import { store } from './src/store'

import Login from './src/components/Login'
import Events from './src/components/Events'
import EventDetails from './src/components/EventDetails'

let RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Events: {
      screen: Events,
      navigationOptions: {
        header: null
      }
    },
    EventDetails: {
      screen: EventDetails
    }
  },
  {
    initialRouteName: 'Login'
  }
)

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
