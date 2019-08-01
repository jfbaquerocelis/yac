import { connect } from 'react-redux'
import { getUsers, logoutUser } from '../redux/actions'
import ListUsers from '../components/ListUsers'

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers())
    },
    logoutUser: (user) => {
      dispatch(logoutUser(user))
    }
  }
}

const Users = connect(mapStateToProps, mapDispatchToProps)(ListUsers)

export default Users
