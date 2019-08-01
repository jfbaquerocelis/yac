import config from '../config'

// Acciones
export const ERROR = 'ERROR'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const LIST_USERS = 'LIST_USERS'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'
export const GET_MESSAGES = 'GET_MESSAGES'
export const CONNECT_SOCKET = 'CONNECT_SOCKET'
export const DISCONNECT_SOCKET = 'DISCONNECT_SOCKET'

// Creadores de acciones
export const loginUser = (user) => (dispatch) => {
  fetch(`${config.API_URL}/auth`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json()).then(data => {
    if (data.error) {
      dispatch({ type: ERROR, error: data.error })
    } else {
      dispatch({ type: ERROR, error: '' })
      dispatch({ type: LOGIN_USER, nickname: data.nickname, isLogIn: data.isLogIn })
    }
  })
}

export const logoutUser = (user) => (dispatch) => {
  fetch(`${config.API_URL}/logout`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json()).then(data => {
    if (data.error) {
      dispatch({ type: ERROR, error: data.error })
    } else {
      dispatch({ type: ERROR, error: '' })
      dispatch({ type: LOGOUT_USER, nickname: '', isLogIn: false })
    }
  })
}

export const getUsers = () => (dispatch) => {
  fetch(`${config.API_URL}/users`, {
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json()).then(data => {
    if (data.error) {
      dispatch({ type: ERROR, error: data.error })
    } else {
      dispatch({ type: ERROR, error: '' })
      dispatch({ type: LIST_USERS, users: data })
    }
  })
}

export function addUser (user) {
  return { type: ADD_USER, user }
}

export function removeUser (user) {
  return { type: REMOVE_USER, user }
}

export function sendMessage (message) {
  message.date = new Date().toISOString()

  return { type: SEND_MESSAGE, message }
}

export function addMessage(message) {
  return { type: ADD_MESSAGE, message }
}

export const getMessages = () => (dispatch) => {
  fetch(`${config.API_URL}/messages`, {
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json()).then(data => {
    if (data.error) {
      dispatch({ type: ERROR, error: data.error })
    } else {
      dispatch({ type: ERROR, error: '' })
      dispatch({ type: GET_MESSAGES, messages: data })
    }
  })
}

export function updateMessage(message) {
  return { type: UPDATE_MESSAGE, message }
}

export function removeMessage() {
  return { type: REMOVE_MESSAGE }
}
