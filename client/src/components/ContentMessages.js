import React from 'react'
import { Row, Col } from 'react-materialize'
import Message from './Message'

class ContentMessages extends React.Component {
  constructor(props) {
    super(props)

    this.scrollDown = this.scrollDown.bind(this)
  }

  scrollDown() {
    let chatMessages = document.querySelector('.chat__messages')
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  componentDidMount() {
    this.scrollDown()
  }
  componentDidUpdate() {
    this.scrollDown()
  }

  render() {
    return(
      <Row>
        {this.props.messages.map((message, index) =>
          <Col s={9} key={index}>
            <Message {...message} />
          </Col>
        )}
      </Row>
    )
  }
}

export default ContentMessages
