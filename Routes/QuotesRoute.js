const express = require('express');
const routes = express.Router()
const Quotes = require('../Models/Quotes')


routes.get('/', async function(req, res){
    const Quote = await Quotes.find();
    res.json(Quote);
});


routes.post('/', async function(req, res){

    const Quote= new Quotes({
        QuoteName: req.body.QuoteName,
        Quote: req.body.Quote
    });
      
   const quote = await Quote.save()
    res.json(quote);
});




module.exports = routes