'use strict'

const Router = require('express/lib/router')
const logoutController = require('../controllers/logout')

const router = Router()

router.route('/logout')
  .post(logoutController)

module.exports = router
