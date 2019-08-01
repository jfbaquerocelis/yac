import { connect } from 'react-redux'
import { getMessages } from '../redux/actions'
import ContentMessages from '../components/ContentMessages'

const mapStateToProps = state => {
  return {
    user: state.user,
    messages: state.messages,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages())
    }
  }
}

const Messages = connect(mapStateToProps, mapDispatchToProps)(ContentMessages)

export default Messages
