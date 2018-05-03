const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const generator = require('./src/citizenIDGenerator')
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
  this.newCitizenID = generator()
  res.render('successPage')
})

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const assert = require('assert');

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db('test_db');
  const collection = db.collection('documents');
});



app.listen(8080, () => console.log('Your on localhost 8080'))

module.exports = app
