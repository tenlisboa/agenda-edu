import { SET_EVENTS, SELECT_EVENT, BUSY } from '../../actions/app/types'

const initialState = {
  busy: false,
  events: [],
  metadata: {},
  selectedEvent: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: [...state.events, ...action.events.data],
        metadata: action.events.metadata
      }
    case SELECT_EVENT:
      return { ...state, selectedEvent: action.event }
    case BUSY:
      return { ...state, busy: action.busy }
    default:
      return state
  }
}
