import { ERROR, BUSY } from './types'
import api from '../../utils/api'
import { AsyncStorage } from 'react-native'

export const login = (email, password) => async dispatch => {
  dispatch({ type: BUSY, busy: true })
  try {
    const { data } = await api.post('/login', { email, password })
    await AsyncStorage.setItem('@Auth:Token', data.token)
    dispatch({ type: BUSY, busy: false })
    dispatch({ type: ERROR, error: null })
    return data.token
  } catch (err) {
    dispatch({ type: ERROR, error: err.response.data.message })
    dispatch({ type: BUSY, busy: false })
  }
}
