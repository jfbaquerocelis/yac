import { ERROR, LOGIN_USER, LIST_USERS, SEND_MESSAGE, GET_MESSAGES, LOGOUT_USER, ADD_USER, REMOVE_USER, ADD_MESSAGE, UPDATE_MESSAGE, REMOVE_MESSAGE } from './actions'
import { combineReducers } from 'redux'

function error (state = '', action) {
  switch (action.type) {
    case ERROR:
      return action.error
    default:
      return state
  }
}

function loginUser (state = { nickname: '', isLogIn: false }, action) {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, { nickname: action.nickname, isLogIn: action.isLogIn })
    case LOGOUT_USER:
      return Object.assign({}, state, { nickname: action.nickname, isLogIn: action.isLogIn })
    default:
      return state
  }
}

function listUsers (state = [], action) {
  switch (action.type) {
    case LIST_USERS:
      return Array.from(action.users)
    case ADD_USER:
      let alreadyExist = state.find(user => user.nickname === action.user.nickname)

      if (alreadyExist) return [...state]

      return [...state, action.user]
    case REMOVE_USER:
      return state.filter(item => {
        return item.nickname !== action.user.nickname
      })
    default:
      return state
  }
}

function messages (state = [], action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return [...state, action.message]
    case ADD_MESSAGE:
      return [...state, action.message]
    case UPDATE_MESSAGE:
      return state.map(msg => {
        if (msg.body === action.message.body && msg.date === action.message.date) msg.youtube = action.message.youtube

        return msg
      })
    case REMOVE_MESSAGE:
      let copy = Array.from(state)
      copy.pop()

      return copy
    case GET_MESSAGES:
      return Array.from(action.messages)
    default:
      return state
  }
}

export default combineReducers({
  user: loginUser,
  users: listUsers,
  messages,
  error
})

