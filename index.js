const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const generator = require('./src/citizenIDGenerator')
const mongoose = require('mongoose')
var format = require('util').format;
app.set("view engine", "ejs");
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/citizens')

let Citizen = require('./src/model/citizen')

app.get('/', function(req, res){
  res.render('landingPage')
});

app.get('/citizen', function(req, res){
  res.render('successPage')
})

app.post('/citizen', function(req, res){
  this.title = req.body.title
  this.firstname = req.body.firstname
  this.surname = req.body.surname
  this.newCitizenID = generator()

  var citizen = new Citizen(req.body);
  citizen.save()
  .then(item => {
    res.render('successPage')
  })
  .catch(err => {
    res.status(400).send("Not Saved")
  });

})

app.listen(8081, () => console.log('Your on localhost 8081'))

module.exports = app
