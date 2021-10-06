const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const query = req.query
  res.render('index', { warning: query.warning })
})

module.exports = router