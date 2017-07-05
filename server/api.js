const express = require('express')
const router = express.Router()
const db = require('./db')
// const fn = () => {}

router.get('/api/initYftTop', (req, res) => {
  console.log('Here is api.js router.post /api/initYftTop')
  db.Customer.find((err, doc) => {
    if (err) {
      console.log(err)
    } else if (doc) {
      // console.log('initYftTop:' + doc)
      res.send(JSON.stringify(doc))
    }
  })

})

module.exports = router
