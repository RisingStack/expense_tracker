import * as userApi from '../api/user'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function login(body) {
  return async dispatch => {
    const user = await userApi.login(body)
    dispatch({ type: LOGIN, user })
  }
}

export function register(body) {
  return async dispatch => {
    const user = await userApi.register(body)
    dispatch({ type: LOGIN, user })
  }
}

export function getMe() {
  return async dispatch => {
    const user = await userApi.getMe()
    dispatch({ type: LOGIN, user })
  }
}

export function logout() {
  return async dispatch => {
    await userApi.logout()
    dispatch({ type: LOGOUT })
  }
}
