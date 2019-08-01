'use strict'

const app = require('../connections/firebase')
const search = require('youtube-search')
const { YOUTUBE_KEY } = require('../config')

const config = {
  maxResults: 3,
  key: YOUTUBE_KEY
}

function messages (socket) {
  socket.on('sending message...', message => {
    try {
      if (message.body.startsWith('/youtube')) {
        let query = message.body.replace('/youtube ', '').replace('/', ' ')

        if (!query) throw new Error('Recuerda buscar videos así: /youtube song/artist')

        search(query, config, function (err, results) {
          if (err) throw new Error('Hubo un error, intenta de nuevo')

          if (results.length === 0) throw new Error(`No se encontraron videos para la busqueda ${query}`)

          let video = results[0]

          message.youtube = video.id

          app.database().ref('/messages').push(message)
          socket.to('meltstudio').emit('new message', message)
          socket.emit('update message', message)
        })
      } else {
        app.database().ref('/messages').push(message)
        socket.to('meltstudio').emit('new message', message)
      }
    } catch (err) {
      socket.emit('an error has ocurred', err.message)
    }
  })
}

module.exports = messages
