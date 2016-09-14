import { combineReducers } from 'redux'
import navigationState from './NavReducer'
import SessionReducer from './SessionReducer'

export default combineReducers({
  navigationState,
  SessionReducer
})
