import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Row, Col } from 'react-materialize'
import Login from '../containers/Login'
import Chat from '../containers/Chat'

function App() {
  return (
    <Row>
        <Router>
          <Col s={6} offset={'s3'}>
            <Route path="/" exact component={Login} />
          </Col>
          <Col s={12} className="chat-container">
            <Route path="/chat" exact component={Chat} />
          </Col>
        </Router>
    </Row>
  )
}

export default App
