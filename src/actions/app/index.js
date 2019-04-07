import api from '../../utils/api'
import { AsyncStorage } from 'react-native'
import { SET_EVENTS, BUSY } from './types'
import formatEvents from '../../utils/formatEvents'

export const fetchEvents = (page = 1) => async dispatch => {
  dispatch({
    type: BUSY,
    busy: true
  })
  try {
    const token = await AsyncStorage.getItem('@Auth:Token')
    const { data } = await api.get(`/events?limit=10;page=${page}`, {
      headers: { token }
    })

    dispatch({
      type: SET_EVENTS,
      events: { ...data, data: formatEvents(data.data) }
    })
    dispatch({
      type: BUSY,
      busy: false
    })
  } catch (err) {
    dispatch({
      type: BUSY,
      busy: false
    })
  }
}
