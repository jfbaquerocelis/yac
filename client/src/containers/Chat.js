import { connect } from 'react-redux'
import { addUser, removeUser, addMessage, getMessages, updateMessage, removeMessage } from '../redux/actions'
import RoomChat from '../components/RoomChat'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => {
      dispatch(addUser(user))
    },
    removeUser: (user) => {
      dispatch(removeUser(user))
    },
    addMessage: (message) => {
      dispatch(addMessage(message))
    },
    getMessages: () => {
      dispatch(getMessages())
    },
    updateMessage: (message) => {
      dispatch(updateMessage(message))
    },
    removeMessage: () => {
      dispatch(removeMessage())
    }
  }
}

const Chat = connect(mapStateToProps, mapDispatchToProps)(RoomChat)

export default Chat
