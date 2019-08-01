'use strict'

const Router = require('express/lib/router')
const { getMessages } = require('../controllers/messages')

const router = Router()

router.route('/messages')
  .get(getMessages)


module.exports = router
