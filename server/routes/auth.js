'use strict'

const Router = require('express/lib/router')
const authController = require('../controllers/auth')

const router = Router()

router.route('/auth')
  .post(authController)


module.exports = router
