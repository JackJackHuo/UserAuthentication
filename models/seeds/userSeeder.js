const db = require('../../config/mongoose')
const User = require('../user')
const userData = require('./users.json')

db.once('open', () => {
  User.insertMany(userData.users)
})