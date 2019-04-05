import { createStore, combineReducers } from 'redux'

import Reducers from '../reducers'

export const store = createStore(combineReducers(Reducers))
