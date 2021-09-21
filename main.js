const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())

const DB =[]

 
app.get('/', function (req, res) {
  res.send(DB)

})

app.post('/', function (req, res) {
    console.log(req.body)
    DB.push(req.body)
})


 
app.listen(3000)