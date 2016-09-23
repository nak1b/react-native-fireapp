import { combineReducers } from 'redux'
import navigationState from './NavReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
  navigationState,
  AuthReducer
})
