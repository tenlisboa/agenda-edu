import { SET_EVENTS, SELECT_EVENT } from '../../actions/app/types'

const initialState = {
  events: [],
  metadata: {},
  selectedEvent: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.events.data,
        metadata: action.events.metadata
      }
    case SELECT_EVENT:
      return { ...state, selectedEvent: action.event }
    default:
      return state
  }
}
