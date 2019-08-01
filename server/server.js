'use strict'

const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
const cors = require('cors')

const { PORT } = require('./config')

let app = express()
const server = http.createServer(app)
const io = socketIO(server)

// Routes
const auth = require('./routes/auth')
const logout = require('./routes/logout')
const users = require('./routes/users')
const messages = require('./routes/messages')

// Sockets
const general = require('./sockets')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(auth)
app.use(logout)
app.use(users)
app.use(messages)

general(io)

server.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`)
})
