'use strict'

function auth (socket) {
  // Una vez el usuario se conecte, lo vamos a ingresar a un cuarto
  socket.join('meltstudio')

  // Recibimos el socket para decir a los demás integrantes quien se acaba de conectar
  socket.on('i am here', user => {
    socket.to('meltstudio').emit('user connected', user)
  })

  socket.on('good bye', user => {
    socket.to('meltstudio').emit('user disconnected', user)
  })
}

module.exports = auth
