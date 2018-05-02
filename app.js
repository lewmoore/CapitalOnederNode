const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.set("views", "views")


app.get('/', function(req, res){
  res.render('landingPage')
});

app.listen(8080, () => console.log('Your on localhost 8080'))

module.exports = app