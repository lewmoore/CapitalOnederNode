var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citizenSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  surname: String,
  previouscountry: String,
  sex: String
})

module.exports = mongoose.model('Citizen', citizenSchema)
