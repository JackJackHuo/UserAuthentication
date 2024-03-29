const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const signup = require('./modules/signup')

router.use('/', home)
router.use('/signup', signup)

module.exports = router
