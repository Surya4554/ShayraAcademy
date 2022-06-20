const { response } = require('express');
const express = require('express');
const { route } = require('express/lib/application');
const async = require('hbs/lib/async');
const Contact = require("../models/Contact");
const Detail = require('../models/Detail');
const Gallery = require('../models/Gallery');
const Service = require('../models/Service');
const Slider = require('../models/Slider');


const routes = express.Router();

routes.get("/", async (req, res) => {
    const details = await Detail.findOne({ "_id" : "6280bbc124553605111f4273" });
    const slides = await Slider.find();
    const services = await Service.find();
    
    res.render('index', {
        details : details,
        slides : slides,
        services : services
    });
})

routes.get("/gallery", async (req, res) => {
    const details = await Detail.findOne({ "_id" : "6280bbc124553605111f4273" });
    const galleries = await Gallery.find();
    
    res.render('gallery', {
        details : details,
        galleries : galleries
    });
})

routes.post("/process-contact-form", async (request, response) => {
    try{
         const data = await Contact.create(request.body)
         response.redirect("/")
    }catch(error){
        console.log(error);
        alert('Form is not Submitted Please Try Again.')
        response.redirect("/")
    }
})

module.exports = routes;