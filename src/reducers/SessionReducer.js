import { AUTH_SUCCESS, AUTH_FAILED, LOGOUT } from '../actions/SessionActions'

const initialState = {
  isLoggedIn: false,
  user: null
}

function sessionReducer(state=initialState, action) {
  switch(action.type) {
    case AUTH_SUCCESS: 
      return {
        isLoggedIn: true,
        user:action.payload
      }


    case LOGOUT:
    case AUTH_FAILED: 
      return initialState

    default:
      return state
  }
}

module.exports = sessionReducer;
