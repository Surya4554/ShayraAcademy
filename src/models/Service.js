const mongoose = require('mongoose');

const Service = mongoose.Schema({
    icon : String,
    title : String,
    validity : String,
    subTitle : String,
    description : String,
    price : String,
    buy : String
});

module.exports = mongoose.model('service', Service);