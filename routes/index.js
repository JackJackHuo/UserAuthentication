const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const login = require('./modules/login')
const signup = require('./modules/signup')

router.use('/', home)
router.use('/login', login)
router.use('/signup', signup)

module.exports = router
