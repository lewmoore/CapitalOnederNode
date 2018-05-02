const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;
const request = require('request')
chai.use(chaiHttp);

describe('Success Page', function(){
  it('should load with status 200', function(){
    chai.request(app)
    .get('/success')
    .end(function(err, res){
      expect(res).to.have.status(200)
    })
  })

  it('can recieve post requests', function(){
    chai.request(app)
    .post('/success')
    .end(function(err, res){
      expect(res).to.have.status(200)
    })
  })

  it('should render the users form input', function(){
    chai.request(app)
    .post('/success')
    .send({
      "title": 'Mr',
      'firstname': 'Lewis',
      'surname': 'Moore',
      'previouscountry': 'UK',
      'sex': 'Male'
    })
    .end(function(err, res){
      chai.expect(res.text).to.include('Mr')
      chai.expect(res.text).to.include('Lewis')
      chai.expect(res.text).to.include('Moore')
    })
  })
})
