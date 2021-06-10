const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 4005


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})
app.get('/styles', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.css'))
  })
app.get('/pictures/:name', function(req, res) {
    res.sendFile(path.join(__dirname, `../images/${req.params.name}`))
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})