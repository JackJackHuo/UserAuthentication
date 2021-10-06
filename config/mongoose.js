const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/user')
const db = mongoose.connection

db.on('error' , ()=>{
  console.log('mongodb error')
})

db.once('open' , ()=>{
  console.log('mongodn connected!!!!!!!!!')
})

module.exports = db