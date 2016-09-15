import { AUTH_SUCCESS, AUTH_FAILED, LOGOUT, ATTEMPTING_LOGIN, 
         AWAITING_AUTH_RESPONSE, LOGGED_IN, ANONYMOUS } from '../actions/SessionActions'

const initialState = {
  authType: ANONYMOUS,
  user: null
}

function sessionReducer(state=initialState, action) {
  switch(action.type) {
    case ATTEMPTING_LOGIN: 
      return {
        ...state,
        authType: AWAITING_AUTH_RESPONSE
      }

    case AUTH_SUCCESS: 
      return {
        authType:  LOGGED_IN,
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
