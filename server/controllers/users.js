'use strict'

const app = require('../connections/firebase')

async function getUsers (req, res) {
  try {
    let snapshot = await app.database().ref('/users').once('value')
    let data = snapshot.val()

    if (!data) return res.status(200).json([])

    let users = Object.keys(data).map(key => {
      return data[key]
    })

    res.status(200).json(users)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = {
  getUsers
}
