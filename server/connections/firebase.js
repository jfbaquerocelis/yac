'use strict'

const firebase = require('firebase')

const { FIREBASE } = require('../config')

let app = firebase.initializeApp({
  apiKey: FIREBASE.API_KEY,
  authDomain: FIREBASE.AUTH_DOMAIN,
  databaseURL: FIREBASE.DATABASE,
  projectId: FIREBASE.PROJECT,
  messagingSenderId: FIREBASE.MESSAGE_ID,
  storageBucket: FIREBASE.STORAGE,
  appId: FIREBASE.APP_ID
})

module.exports = app
