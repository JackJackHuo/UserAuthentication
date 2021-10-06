const express = require('express')
const exphbs = require('express-handlebars')
const User = require('./models/user')
require('./config/mongoose')
const app = express()
const port = 3000

app.engine('hbs' , exphbs({defaultLayout:'main' , extname:'hbs'}))
app.set('view engine' , 'hbs')

app.get('/' , (req , res) => {
  User.find()
      .lean()
      .then(users => (res.render('index' , {users:users})))
  
})

app.listen(port , ()=>{
  console.log(`youre listening to http://localhost:${port}`)
})