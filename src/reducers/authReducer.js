import { LOGIN, ERROR } from '../actions/auth/types'

const initialState = {
  token: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token }
    case ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
