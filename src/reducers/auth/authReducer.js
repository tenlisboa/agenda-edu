import { ERROR, BUSY } from '../../actions/auth/types'

const initialState = {
  error: null,
  busy: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.error }
    case BUSY:
      return { ...state, busy: action.busy }
    default:
      return state
  }
}
