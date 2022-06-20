const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/main');
const Gallery = require('./models/Gallery');
const Detail = require('./models/Detail');
const Slider = require('./models/Slider');
const Service = require('./models/Service');

app.use(bodyParser.urlencoded({
    extended : true
}))
app.use('/static', express.static('public'));
app.use('', routes);



app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials("views/partials")


// database connection
mongoose.connect('mongodb://localhost/coaching', ()=> {
    console.log('Database Connected');

    
    // Gallery.create([
    //     { url : '/static/images/gal1.jpg'},
    //     { url : '/static/images/gal2.webp'},
    //     { url : '/static/images/gal3.jpg'},
    //     { url : '/static/images/gal4.png'},
    //     { url : '/static/images/gal5.png'},
    //     { url : '/static/images/gal6.png'},
    //     { url : '/static/images/gal7.webp'},
    //     { url : '/static/images/gal8.jpg'},
    //     { url : '/static/images/gal9.jpg'},
    //     { url : '/static/images/gal10.jpg'},
    //     { url : '/static/images/gal11.jpeg'},
    //     { url : '/static/images/gal12.jpg'},
    //     { url : '/static/images/gal13.webp'},
    //     { url : '/static/images/gal14.webp'},
    //     { url : '/static/images/gal15.jpg'},
    //     { url : '/static/images/gal16.jpg'},
    //     { url : '/static/images/gal17.jpg'},
    //     { url : '/static/images/gal18.jpg'},
    //     { url : '/static/images/gal19.webp'},
    //     { url : '/static/images/gal20.jpg'}
    // ])

    // Service.create([
    //     { icon : '/static/images/ser1.jpg', title : 'IIT JEE ( Target Batch-22 )', validity : '1 Year', subTitle : 'Physics, Chemistry, Math', description : 'Total 300+ Videos, 120+ Mock Tests, 50+ Sample Paper, Last 50 Years Previous Paper Solution, PDF Notes, 1000+ Assignments.', price : 'Rs. 25000', buy : 'Buy Now' },
    //     { icon : '/static/images/ser2.jpg', title : 'IIT JEE ( Foundation Batch-22 )', validity : '2 Years', subTitle : 'Physics, Chemistry, Math', description : 'Total 600+ Videos, 200+ Mock Tests, 80+ Sample Paper, Last 50 Years Previous Paper Solution, PDF Notes, 1500+ Assignments.', price : 'Rs. 35000', buy : 'Buy Now' },
    //     { icon : '/static/images/ser3.jpg', title : 'NEET ( UG / PG Batch-22 )', subTitle : 'Physics, Chemistry, Biology', validity : '2 Years', description : 'Total 500+ Videos, 100+ Mock Tests, 80+ Sample Paper, Last 20 Years Previous Paper Solution, PDF Notes, 1200+ Assignments.', price : 'Rs. 36000', buy : 'Buy Now' },
    //     { icon : '/static/images/ser4.png', title : 'NIMCET ( All MCA Entrance )', validity : '1 Year', subTitle : 'Math, Reasoning, Computer', description : 'Total 600+ Videos, 100+ Mock Tests, 50+ Sample Paper, Last 12 Years Previous Paper Solution, PDF Notes, 1500+ Assignments.', price : 'Rs. 20000', buy : 'Buy Now' },
    //     { icon : '/static/images/ser5.jpg', title : 'NDA ( Target Batch-22 )', validity : '2 Years', subTitle : 'All Subject + SSB', description : 'Total 500+ Videos, 80+ Mock Tests, 100+ Sample Paper, Last 20 Years Previous Paper Solution, PDF Notes, 1200+ Assignments.', price : 'Rs. 20000', buy : 'Buy Now' },
    //     { icon : '/static/images/ser6.png', title : 'NTSE ( Target Batch-22 )', validity : '1 Years', subTitle : 'All Subjects', description : 'Total 100+ Videos, 50+ Mock Tests, 20+ Sample Paper, Last 10 Years Previous Paper Solution, PDF Notes, 500+ Assignments.', price : 'Rs. 5000', buy : 'Buy Now' },
    //     { icon : '/static/images/ser7.png', title : 'KVPY ( Target Batch-22 )', validity : '2 Years', subTitle : 'Physics, Chemistry, Math, Biology', description : 'Total 100+ Videos, 30+ Mock Tests, 50+ Sample Paper, Last 10 Years Previous Paper Solution, PDF Notes, 500+ Assignments.', price : 'Rs. 3000', buy : 'Buy Now' },
    //     { icon : '/static/images/ser8.jpg', title : 'Olympiad ( Target Batch-22 )', validity : '2 Years', subTitle : 'All Subjects', description : 'Total 150+ Videos, 50+ Mock Tests, 100+ Sample Paper, Last 15 Years Previous Paper Solution, PDF Notes, 700+ Assignments.', price : 'Rs. 4000', buy : 'Buy Now' },
    //     { icon : '/static/images/ser9.webp', title : 'Class 12 ( CBSE/ ICSE/ State Board )', validity : 'Life Time', subTitle : 'Physics, Chemistry, Math, Biology', description : 'Total 500+ Videos, 50+ Mock Tests, 50+ Sample Paper, Last 15 Years Previous Paper Solution, PDF Notes, 1000+ Assignments.', price : 'Free', buy : 'Enroll Now' },
    //     { icon : '/static/images/ser10.png', title : 'Class 11 ( CBSE/ ICSE/ State Board )', validity : 'Life Time', subTitle : 'Physics, Chemistry, Math, Biology', description : 'Total 800+ Videos, 60+ Mock Tests, 50+ Sample Paper, Last 15 Years Previous Paper Solution, PDF Notes, 1200+ Assignments.', price : 'Free', buy : 'Enroll Now' },
    //     { icon : '/static/images/ser11.png', title : 'Class 10 ( CBSE/ ICSE/ State Board )', validity : 'Life Time', subTitle : 'Physics, Chemistry, Math, Biology', description : 'Total 600+ Videos, 80+ Mock Tests, 50+ Sample Paper, Last 20 Years Previous Paper Solution, PDF Notes, 1500+ Assignments.', price : 'Free', buy : 'Enroll Now' },
    //     { icon : '/static/images/ser12.webp', title : 'Class 9 ( CBSE/ ICSE/ State Board )', validity : 'Life Time', subTitle : 'Physics, Chemistry, Math, Biology', description : 'Total 500+ Videos, 40+ Mock Tests, 30+ Sample Paper, Last 15 Years Previous Paper Solution, PDF Notes, 800+ Assignments.', price : 'Free', buy : 'Enroll Now' },
    // ])

    // Slider.create([
    //     { title : 'Smart Education', subTitle : 'Education is important but Smart Education is most important we are giving you a right education.', imageUrl : '/static/images/s1.jpg'},
    //     { title : 'Smart Class Rooms', subTitle : 'We are providing you a full facility smart class for non-interrupt your study.', imageUrl : '/static/images/s2.webp'},
    //     { title : 'Public Behavioural', subTitle : 'We are trend you how you become a unique in your social.We are building you most attractive.', imageUrl : '/static/images/s3.png'},
    //     { title : 'Motivational Seminar', subTitle : 'We are always taking a seminar and motivation session for student always motivate and passionate about your Goals.', imageUrl : '/static/images/s4.jpg'}
    // ])

    // Detail.create({
    //     brandName : "Shayra Academy",   brandIconUrl : "./static/images/logo.png",
    //     links:[
    //               {label : "Home",  url : "/"},
    //               {label : "Services",  url : "/services"},
    //               {label : "Gallery",  url : "/gallery"},
    //               {label : "About",  url : "/about"},
    //               {label : "Contact Us",  url : "/contact"}
    //           ]
    // })

})

app.listen(process.env.PORT || 5556, () => {
    console.log("server start");
})  