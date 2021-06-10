const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 4005


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.css'))
  })
app.get('/images', function(req, res) {
    res.sendFile(path.join(__dirname, '../1akdbeach_img.jpg'))
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})