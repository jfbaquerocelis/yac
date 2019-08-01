import { connect } from 'react-redux'
import { loginUser } from '../redux/actions'
import LoginCard from '../components/LoginCard'

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: nickname => {
      dispatch(loginUser({ nickname, isLogIn: true }))
    }
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginCard)

export default Login
