import React from 'react'
import { Col, Button, Textarea } from 'react-materialize'

class FormMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: {
        user: '',
        body: '',
        date: '',
        youtube: ''
      },
      error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.message.body.length <= 140) {
      this.props.sendMessage(this.state.message)
      this.props.socket.emit('sending message...', this.state.message)
      this.setState({ message: { body: '', user: '', date: '', youtube: '' } })
    } else {
      this.setState({ error: 'El mensaje es muy largo, por favor reduce la cantidad de caracteres' })
    }
  }
  handleChange(event) {
    this.setState({ message: { body: event.target.value, user: this.props.user.nickname, date: '', youtube: '' } })
  }
  handleKeyDown(event) {
    if (this.state.message.body === '' && event.keyCode === 32) {
      event.preventDefault()
    } else if (this.state.message.body.endsWith(' ') && event.keyCode === 32) {
      event.preventDefault()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Col s={10}>
          <Textarea validate error={this.state.error} success={this.props.searchFailed} onChange={this.handleChange} onKeyDown={this.handleKeyDown} s={12} label="Escribe un mensaje..." data-length={140} value={this.state.message.body} />
        </Col>
        <Col s={2}>
          <Button s={12} large type="submit" waves="light" className="green accent-4">ENVIAR</Button>
        </Col>
      </form>
    )
  }
}

export default FormMessage
