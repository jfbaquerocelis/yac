import React from 'react'
import socket from 'socket.io-client'
import { Row, Col } from 'react-materialize'
import Form from '../containers/Form'
import Users from '../containers/Users'
import Messages from '../containers/Messages'

import config from '../config'

import './css/chat.css'

class RoomChat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      endpoint: config.SOCKET_URL,
      socket: null,
      fail: null
    }
  }

  componentDidMount() {
    const client = socket(this.state.endpoint)

    this.props.getMessages()

    client.emit('i am here', this.props.user)

    client.on('user connected', user => {
      this.props.addUser(user)
    })
    client.on('user disconnected', user => {
      this.props.removeUser(user)
    })
    client.on('new message', message => {
      this.props.addMessage(message)
    })
    client.on('update message', update => {
      this.props.updateMessage(update)
    })
    client.on('an error has ocurred', fail => {
      this.setState({ fail })
      this.props.removeMessage()
    })

    this.setState({ socket: client })
  }

  render() {
    return (
      <Row className="chat">
        <Col s={9} className="grey lighten-5 chat__messages">
          <Messages />
        </Col>
        <Col s={3} className="grey lighten-3 chat__users">
          <Users socket={this.state.socket} />
        </Col>
        <Col s={12} className="chat__form">
          <Form socket={this.state.socket} searchFailed={this.state.fail} />
        </Col>
      </Row>
    )
  }
}

export default RoomChat
