const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.post('/', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email: email })
      .lean()
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.render('login', { user: user })
          } else {
            res.redirect('/?warning=wrong password')
          }
        } else {
          res.redirect('/?warning=no user found')
        }
      }
    )
})

module.exports = router