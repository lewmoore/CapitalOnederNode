const express = require('express');
const app = express();
const bodyParser = require("body-parser");
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
  res.render('successPage')
})

app.listen(8080, () => console.log('Your on localhost 8080'))

module.exports = app
