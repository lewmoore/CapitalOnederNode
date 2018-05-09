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

var citizenSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  surname: String,
  previouscountry: String,
  sex: String
})
var Citizen = mongoose.model('Citizen', citizenSchema)


app.get('/', function(req, res){
  res.render('landingPage')
});

app.get('/success', function(req, res){
  res.render('successPage')
})

app.post('/success', function(req, res){
  this.title = req.body.title
  this.firstname = req.body.firstname
  this.surname = req.body.surname
  this.previouscountry = req.body.previouscountry
  this.sex = req.body.sex
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