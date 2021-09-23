const mongoose = require('mongoose');

const Qoutes = mongoose.Schema({
    QuoteName: String,
    Quote: String
})

module.exports = mongoose.model("Quotes", Qoutes)