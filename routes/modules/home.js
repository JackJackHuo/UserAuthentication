const express = require('express')
const router = express.Router()
const User = require('../../models/user')
// session用來存放cookie
const session = {}

// home page
router.get('/', (req, res) => {
  const cookie = req.signedCookies
  const user = Object.keys(session).find(sessionId => sessionId === cookie.session_id)
  console.log(session)
  console.log(cookie)
  // 檢查session中是否有存放此用戶的cookie
  if (user){
    // 從session中抓出登入者的cookie 
    User.findOne({ _id: session[user].user_id })
        .lean()
        .then(user => res.render('loggedIn' , { user: user }))
  }else{
    res.render('index')
  }
})

// login page
router.get('/login', (req, res) => {
  const query = req.query
  res.render('login', { message: query.message })
})
// user login request
router.post('/', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email: email })
      .lean()
      .then(user => {
        if (user) {
          if (user.password === password) {
            // ex: email => tony@stark.com ;  session_id = tony
            const session_id = email.split('@')[0]
            // 把登入者的cookie存入session
            // session = {tony: {userId: ObjectId("615f2981fd5df83ea5cf8b3e")}}
            session[session_id] = { user_id: user._id}
            // 寫入cookie
            // signed:true代表寫入cookie時有利用app.js裡面的cookieParser('secretcode')上簽章
            // maxAge設cookie多少millisecond後消失
            res.cookie('session_id', session_id , {signed:true , path:'/' , maxAge: 60000})
            res.redirect('/')
          } else {
            res.redirect('/login?message=wrong password')
          }
        } else {
          res.redirect('/login?message=no user found')
        }
    })
})
// user logout request
router.get('/logout', (req, res) => {
  res.clearCookie('session_id')
  res.redirect('/')
})

module.exports = router