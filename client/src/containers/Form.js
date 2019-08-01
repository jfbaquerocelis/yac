import { connect } from 'react-redux'
import { sendMessage } from '../redux/actions'
import FormMessage from '../components/FormMessage'

const mapStateToProps = state => {
  return {
    user: state.user,
    messages: state.messages,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message => {
      dispatch(sendMessage(message))
    }
  }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(FormMessage)

export default Form
