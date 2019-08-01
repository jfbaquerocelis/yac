'use strict'

const app = require('../connections/firebase')

async function logoutController (req, res) {
  try {
    let snapshot = await app.database().ref('/users').once('value')
    let users = snapshot.val()
    let referenceId

    Object.keys(users).forEach(key => {
      if (users[key].nickname === req.body.nickname) return referenceId = key
    })

    if (referenceId) {
      app.database().ref(`/users/${referenceId}`).remove()

      res.status(200).json({})
    } else {
      throw new Error('Hubo un error cerrando sesión, intenta de nuevo.')
    }
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = logoutController
