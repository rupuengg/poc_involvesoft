import { Record } from 'immutable'
import { post } from '../../utils/httpRequest'
import { getUserSettings } from '../../userSetting'
// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_READY_STATUS = 'LOGIN_READY'
export const VOLUNTEERS_LOADED_STATUS = 'VOLUNTEERS_LOADED'
export const LOGGED_OUT_STATUS = 'LOGGED_OUT'
export const VOLUNTEERS_LOADING_STATUS = 'VOLUNTEERS_LOADING'
export const GENERIC_ERROR_STATUS = 'GENERIC_ERROR'
export const LOGIN_INITIAL_STATUS = 'LOGIN_INITIAL'
export const WRONG_CREDS_STATUS = 'WRONG_CREDS'

// -----------------------------
// actions
// ------------------------------

const VOLUNTEERS_LOADING = 'map/VOLUNTEERS_LOADING'
const VOLUNTEERS_LOADED = 'map/VOLUNTEERS_LOADED'
const LOGGED_OUT = 'auth/LOGGED_OUT'
const LOGIN_GENERIC_ERROR = 'map/GENERIC_ERROR'
const LOGIN_INITIAL = 'map/LOGIN_INITIAL'
const WRONG_CREDS = 'map/WRONG_CREDS'

// ------------------------------------
// Action creators
// ------------------------------------

const volunteersLoading = () => ({
  type: VOLUNTEERS_LOADING
})

const volunteersLoaded = (payload) => ({
  type: VOLUNTEERS_LOADED,
  payload
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

const fetchvolunteers = (user_id, baseUrl) => {
  var form = {
  "user_id": user_id
}

  console.log(form)
  return (dispatch) => {
    dispatch(volunteersLoading())
    const url = 'http://ec2-18-219-4-0.us-east-2.compute.amazonaws.com:8888/volunteers'
    post(url,form,{},true)
    .then(response => (response.json()))
      .then(payload => {
         console.log('PAYLOAD',payload)
        dispatch(volunteersLoaded(payload))
      }, (payload, status) => {
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


const clear = () => {
  return initialStatus()
}

export const fetchVolunteersActions = {
  fetchvolunteers,
  clear
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetchedIn : false,
  status: null,
  payload : null
}

const actionHandlers = {
  [VOLUNTEERS_LOADING]: (state) => Object.assign({},state,{'status':VOLUNTEERS_LOADING}),

  [VOLUNTEERS_LOADED]: (state, { payload }) => {
    return Object.assign({},state,{
      volunteersLoaded : true,
      status: VOLUNTEERS_LOADED,
      payload
    })
  }

  /*[WRONG_CREDS]: (state) => state.set('status', WRONG_CREDS_STATUS),

  [FETCH_GENERIC_ERROR]: (state) => state.set('status', GENERIC_ERROR_STATUS),

  [FETCH_INITIAL]: (state) => state.set('status', FETCH_INITIAL_STATUS)*/

}

/** @private */
export default function reducer (state = initialState, action) {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}
