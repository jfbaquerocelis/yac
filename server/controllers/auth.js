'use strict'

const app = require('../connections/firebase')

async function authController (req, res) {
  try {
    // Capturamos el usuario
    let user = req.body
    // Vamos a validar si el usuario ya existe
    let snapshot = await app.database().ref('/users').once('value')
    let users = snapshot.val()

    if (users) {
      // Ahora, buscaremos en cada objeto si un usuario posee el mismo nombre y decirle al frontend
      Object.keys(users).forEach(key => {
        if (users[key].nickname === user.nickname) throw new Error('El usuario ya existe, por favor intenta con otro nombre.')
      })
    }

    // Si el arreglo de usuarios está vacío o es nulo, vamos a registrar al nuevo usuario
    app.database().ref('/users').push(user)

    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = authController
