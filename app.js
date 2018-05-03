const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const generator = require('./src/citizenIDGenerator')
var MongoClient = require('mongodb').MongoClient
var format = require('util').format;
app.set("view engine", "ejs");
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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
  MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    this.collection.insertOne({title: this.title, firstname: this.firstname, surname: this.surname, previouscountry: this.previouscountry, sex: this.sex})
  })
  res.render('successPage')
})

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) {
      throw err;
    } else {
        console.log("successfully connected to the database");
    }
    var db = client.db('CapitalOnederTest')
    this.collection = db.collection('citizenCollection')
});

app.listen(8080, () => console.log('Your on localhost 8080'))

module.exports = app
