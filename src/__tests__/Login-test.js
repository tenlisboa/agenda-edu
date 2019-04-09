import React from 'react'
import { Provider } from 'react-redux'
import Login from '../components/Login'
import { store } from '../store'

import * as actions from '../actions/auth'
import * as types from '../actions/auth/types'
import reducer from '../reducers/auth/authReducer'

import renderer from 'react-test-renderer'

test('Login renders correctly', () => {
  const container = () => (
    <Provider store={store}>
      <Login />
    </Provider>
  )
  const tree = renderer.create(container()).toJSON()
  expect(tree).toMatchSnapshot()
})

test('login actions has logged successfull', async () => {
  const { username, password } = {
    username: 'student@ae.com',
    password: '123456'
  }

  expect(actions.login(username, password)).toBeTruthy()
})

test('should handle error message', () => {
  const initialState = {
    error: null,
    busy: false
  }

  expect(
    reducer(initialState, {
      type: types.ERROR,
      error: 'Invalid username or password'
    })
  ).toEqual({
    error: 'Invalid username or password',
    busy: false
  })
})
