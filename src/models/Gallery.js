const mongoose = require('mongoose');

const Gallery = mongoose.Schema({
    url : String,
})

module.exports = mongoose.model("gallery", Gallery);