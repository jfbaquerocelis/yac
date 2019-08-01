'use strict'

const app = require('../connections/firebase')

async function getMessages (req, res) {
  try {
    let snapshot = await app.database().ref('/messages').once('value')
    let data = snapshot.val()

    if (!data) return res.status(200).json([])

    let messages = Object.keys(data).map(key => {
      return data[key]
    })

    res.status(200).json(messages)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = {
  getMessages
}
