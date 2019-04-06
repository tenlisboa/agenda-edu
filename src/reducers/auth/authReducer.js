import { LOGIN, ERROR, BUSY } from '../../actions/auth/types'

const initialState = {
  token: null,
  error: null,
  busy: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token }
    case ERROR:
      return { ...state, error: action.error }
    case BUSY:
      return { ...state, busy: action.busy }
    default:
      return state
  }
}
