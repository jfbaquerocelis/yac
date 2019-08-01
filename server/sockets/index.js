'use strict'

// Este socket nos ayudará a "autenticar" los usuarios cuando se conecten y avisar a los demás usuarios que hay nuevos usuarios o que se han ido
const auth = require('./auth')
// Este socket se encargará de manejar todo el envío de mensajes
const messages = require('./messages')

function general (io) {
  io.on('connection', socket => {
    auth(socket)
    messages(socket)
  })
}

module.exports = general
