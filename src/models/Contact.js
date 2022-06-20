const mongoose = require('mongoose');

const Contact = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    number : String,
    course : String,
    year : String,
    address : String,
    state : String,
    country : String,
    query : String
})

module.exports = mongoose.model("queries", Contact);