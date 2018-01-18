import { Record } from 'immutable'
import { post } from '../../utils/httpRequest'
// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_READY_STATUS = 'LOGIN_READY'
export const LOGGED_IN_STATUS = 'LOGGED_IN'
export const LOGGED_OUT_STATUS = 'LOGGED_OUT'
export const LOGGING_IN_STATUS = 'LOGGING_IN'
export const GENERIC_ERROR_STATUS = 'GENERIC_ERROR'
export const LOGIN_INITIAL_STATUS = 'LOGIN_INITIAL'
export const WRONG_CREDS_STATUS = 'WRONG_CREDS'

// -----------------------------
// actions
// ------------------------------

const LOGGING_IN = 'auth/LOGGING_IN'
const LOGGED_IN = 'auth/LOGGED_IN'
const LOGGED_OUT = 'auth/LOGGED_OUT'
const LOGIN_GENERIC_ERROR = 'auth/GENERIC_ERROR'
const LOGIN_INITIAL = 'auth/LOGIN_INITIAL'
const WRONG_CREDS = 'auth/WRONG_CREDS'

// ------------------------------------
// Action creators
// ------------------------------------

const loggingIn = () => ({
  type: LOGGING_IN
})

const loggedIn = () => ({
  type: LOGGED_IN
})

export const loggedOut = () => ({
  type: LOGGED_OUT
})

const error = () => ({
  type: LOGIN_GENERIC_ERROR
})

const wrongCreds = () => ({
  type: WRONG_CREDS
})

const initialStatus = () => ({
  type: LOGIN_INITIAL
})

const login = (username, password, baseUrl) => {
  var form = {
  "username": username,
  "password": password
}

  console.log(form)
  return (dispatch) => {
    dispatch(loggedIn())
    dispatch(loggingIn())
    const url = 'http://10.0.30.179:8888/index.php/login'
    post(url,form,{},true)
    .then(response => (response.json()))
      .then(payload => {
        dispatch(loggedIn())
      }, (payload, status) => {
        console.log(payload, status)
        payload && payload.result.error === 'Invalid credentials'
        ? dispatch(wrongCreds())
        : dispatch(error())
      })
      .catch(err => {
        dispatch(error())
        console.log(err)
      })
  }
}

const logout = (baseUrl) => {
  return (dispatch) => {
    dispatch(loggedOut())
    /* const token = getState().authentication.token
    const url = baseUrl ? `${baseUrl}/api/v1/user/logout` : `/api/v1/user/logout`
    post(url, {}, { 'Authorization':`Bearer ${token}` })
      .then(response => (response.json()))
      .then(payload => {
        dispatch(removeLoader())
        dispatch(loggedOut(payload.access_token))
      }, (payload) => {
        payload && (payload.status === HTTP_STATUS_CODE_401) && dispatch(error()) && dispatch(removeLoader())
      })
      .catch(err => {
        dispatch(removeLoader())
        dispatch(error())
        console.log(err)
      }) */
  }
}

const clear = () => {
  return initialStatus()
}

export const authActions = {
  login,
  logout,
  clear
}

// ------------------------------------
// Reducer
// ------------------------------------

const Auth = new Record({
  loggedIn : false,
  status: null,
  username : null
})

const initialState = new Auth()

const actionHandlers = {
  [LOGGING_IN]: (state) => state.set('status', LOGGING_IN_STATUS),

  [LOGGED_IN]: (state, { username }) => {
    let nextState = state
    nextState = state.merge({
      loggedIn : true,
      status: LOGGED_IN_STATUS,
      username
    })
    return nextState
  },

  [LOGGED_OUT]: (state, { token }) => {
    return state.merge({
      loggedIn : false,
      status: LOGGED_OUT_STATUS,
      username:null
    })
  },

  [WRONG_CREDS]: (state) => state.set('status', WRONG_CREDS_STATUS),

  [LOGIN_GENERIC_ERROR]: (state) => state.set('status', GENERIC_ERROR_STATUS),

  [LOGIN_INITIAL]: (state) => state.set('status', LOGIN_INITIAL_STATUS)

}

/** @private */
export default function reducer (state = initialState, action) {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}
