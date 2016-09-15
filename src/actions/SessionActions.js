import { login, logout, isUserLoggedIn } from '../api/auth';

// Action Types

export const LOGOUT = 'LOGOUT'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILED = 'AUTH_FAILED'


export function authSuccess(payload) {
  return {
    type: AUTH_SUCCESS,
    payload
  }
}

export function authFailed() {
  return {
    type: AUTH_FAILED
  }
}

export function authLogout() {
  return {
    type: LOGOUT
  }
}

export function isAuthenticated() {
  return (dispatch) => {
    isUserLoggedIn().then(res => {
      dispatch(authSuccess(res))
    }).catch(error => {
      dispatch(authFailed())
    })
  }
}

export function userLogin(email, password) {
  return (dispatch) => {
    login(email, password).then(res => {
      if(!res.error){
        dispatch(authSuccess(res))
      }else{
        dispatch(authFailed())
      }
    })
  }
}

export function userLogout() {
  return (dispatch) => {
    logout().then(() => {
      dispatch(authLogout())
    })
  }
}
