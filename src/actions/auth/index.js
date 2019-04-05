import { LOGIN, ERROR } from './types'
import api from '../../utils/api'
import { AsyncStorage } from 'react-native'

export const login = (email, password) => async dispatch => {
  try {
    const { data } = await api.post('/login', { email, password })
    await AsyncStorage.setItem('@Auth:Token', data.token)
    dispatch({
      type: LOGIN,
      token: data.token
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      error: err.response.data.message
    })
  }
}
