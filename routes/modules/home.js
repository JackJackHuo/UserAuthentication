const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
  const query = req.query
  res.render('index', { message: query.message })
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email: email })
    .lean()
    .then(user => {
      if (user) {
        if (user.password === password) {
          // res.clearCookie('firstName')
          res.render('loggedIn', { user: user })
        } else {
          res.redirect('/?message=wrong password')
        }
      } else {
        res.redirect('/?message=no user found')
      }
    }
    )
})

module.exports = router