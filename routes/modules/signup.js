const express = require('express')
const router = express.Router()
const User = require('../../models/user')


router.get('/' , (req,res) => {
  res.render('signup')
})

router.post('/' , (req,res) => {
  const {newUser, newEmail, newPassword} = req.body
  console.log(req.body)
  console.log(newEmail)
  console.log(newPassword)
  User.findOne({email: newEmail})
      .lean()
      .then(user => {
        if(user){
          res.redirect('/?message= Already signed up')
        }else{
          User.create({
            firstName:newUser,
            email:newEmail,
            password:newPassword
          })
          res.redirect('/?message= Sign up successfully')
        }
      })
})

module.exports = router