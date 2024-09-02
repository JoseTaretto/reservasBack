const express = require('express')


const app = express()
const PORT = 3000;


app.get('/api/negocios', function (req, res) {
  res.send('1')
})

app.listen(PORT)