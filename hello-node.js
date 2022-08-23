const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('HELP THE NODE IS COMING')
})

app.listen(3000)