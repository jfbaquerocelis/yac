'use strict'

const Router = require('express/lib/router')
const { getUsers } = require('../controllers/users')

const router = Router()

router.route('/users')
  .get(getUsers)

module.exports = router
