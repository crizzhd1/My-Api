const express = require('express');
const routes = express.Router()
const Quotes = require('../Models/Quotes')


routes.get('/', async function(req, res){
    
    try {
        const Quote = await Quotes.find();
        res.json(Quote);
        
    } catch (error) {
        
        console.log(error)
    }
    
   
});


routes.post('/', async function(req, res){

    const Quote= new Quotes({
        QuoteName: req.body.QuoteName,
        Quote: req.body.Quote
    });
      
     try {
        const quote = await Quote.save()
        res.json(quote);
        
    } catch (error) {

        console.log(error)
    }
   
});




module.exports = routes