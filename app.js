const cookieParser = require('cookie-parser')
const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes/index')
require('./config/mongoose')
const app = express()
const port = 3000

app.engine('hbs' , exphbs({defaultLayout:'main' , extname:'hbs'}))
app.set('view engine' , 'hbs')

app.use(express.urlencoded({extended:"true"}))
app.use(express.static('./public'))
// sign for cookie
app.use(cookieParser('secretcode'))
app.use(router)


app.listen(port , ()=>{
  console.log(`youre listening to http://localhost:${port}`)
})