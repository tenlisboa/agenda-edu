import api from '../../utils/api'
import { AsyncStorage } from 'react-native'
import { SET_EVENTS } from './types'

export const fetchEvents = (page = 1) => async dispatch => {
  const token = await AsyncStorage.getItem('@Auth:Token')
  const { data } = await api.get(`/events?limit=10;page=${page}`, {
    headers: { token }
  })
  dispatch({
    type: SET_EVENTS,
    events: data
  })
}
