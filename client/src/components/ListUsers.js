import React from 'react'
import { Redirect } from 'react-router-dom'
import { Collection, CollectionItem, Icon } from 'react-materialize'

class ListUsers extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getUsers()
  }

  handleClick (e) {
    e.preventDefault()

    this.props.socket.emit('good bye', this.props.user)
    this.props.logoutUser(this.props.user)
    this.props.socket.close()
  }

  render() {
    if (!this.props.user.isLogIn) return <Redirect to={'/'} />

    return (
      <Collection header="Usuarios">
        {this.props.users.map(user =>
          (this.props.user.nickname === user.nickname) ?
          <CollectionItem key={user.nickname}>
            {user.nickname}
            <a href="#" onClick={this.handleClick} className="secondary-content">
              <Icon>power_settings_new</Icon>
            </a>
          </CollectionItem> :
          <CollectionItem key={user.nickname}>
            {user.nickname}
          </CollectionItem>
        )}
      </Collection>
    )
  }
}

export default ListUsers
