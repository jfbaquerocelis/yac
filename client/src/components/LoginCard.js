import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button, TextInput, Card, Row, Col } from 'react-materialize'

class LoginCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nickname: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleSubmit (event) {
    event.preventDefault()

    if (this.state.nickname) this.props.onLogin(this.state.nickname.toLowerCase())

    this.setState({ nickname: '' })
  }
  handleChange (event) {
    this.setState({
      nickname: event.target.value
    })
  }
  handleKeyDown (event) {
    if (event.keyCode === 32) event.preventDefault()
  }

  render() {
    if (this.props.user.isLogIn) return <Redirect to={'/chat'} />

    return (
      <Card
        className="indigo"
        textClassName="white-text"
        title="MeltStudio Chat"
      >
        <Row>
          <Col>
            <p>¡Hola! Bienvenido a nuestro chat, para empezar solo debes ingresar tu nombre con el cual podremos identificarte.</p>
          </Col>
          <Col s={12}>
            <form onSubmit={this.handleSubmit}>
              <Col s={6} offset="s2">
                <TextInput s={12} value={this.state.nickname} inputClassName="white-text" label="Tu nombre..." onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
              </Col>
              <Col s={2}>
                <Button s={12} large type="submit" waves="light" className="green accent-4">
                  Entrar
                </Button>
              </Col>
            </form>
          </Col>
          <Col>
            <p className="white red-text">{this.props.error}</p>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default LoginCard
