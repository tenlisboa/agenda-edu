import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Reducers from '../reducers'

export const store = createStore(
  combineReducers(Reducers),
  applyMiddleware(thunk)
)
