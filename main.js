const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const quotes = require('./Routes/QuotesRoute')
require('dotenv/config');

app.use(bodyparser.json())

app.use('/quotes', quotes)

app.get('/', async function (req, res) {
  res.send('Welcome to my Api lol')
});

const DBC = async () => {
  await mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('connected to database');
  });

};

DBC()

 
app.listen(3000)