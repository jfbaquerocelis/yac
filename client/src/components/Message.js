import React from 'react'
import Youtube from 'react-youtube'

class Message extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: ''
    }

    this.formatDate = this.formatDate.bind(this)
  }

  componentDidMount() {
    this.formatDate()
  }

  formatDate() {
    let date = new Date(this.props.date)
    let options = {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: 'numeric', minute: 'numeric', second: 'numeric'
    }
    let result = new Intl.DateTimeFormat('es-CO', options).format(date)

    this.setState({ date: result })
  }

  render() {
    return (
      <div className="chat__messages__message">
        <div className="chat__messages__message__up">
          <h6>{this.props.user}</h6>
          <small>{this.state.date}</small>
        </div>
        <div className="chat__messages__message__down">
          {(this.props.youtube) ? <Youtube videoId={this.props.youtube} opts={{ width:400, height:250 }} /> : this.props.body}
        </div>
      </div>
    )
  }
}

export default Message
