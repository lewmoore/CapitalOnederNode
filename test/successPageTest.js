const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const expect = chai.expect;
const Sinon = require('sinon')
const spies = require('chai-spies');
chai.use(spies);
chai.use(chaiHttp);

describe('Success Page', function(){
  let user = {
    "title": 'Mr',
    'firstname': 'Lewis',
    'surname': 'Moore',
    'previouscountry': 'UK',
    'sex': 'Male'
  }


  it('can recieve post requests', function(done){
    chai.request(app)
    .post('/citizen')
    .end(function(err, res){
      expect(res).to.have.status(200)
      done()
    })
  })

  it('should render the users form input', function(done){
    chai.request(app)
    .post('/citizen')
    .send(user)
    .end(function(err, res){
      chai.expect(res.text).to.include('Mr')
      chai.expect(res.text).to.include('Lewis')
      chai.expect(res.text).to.include('Moore')
      done()
    })
  })

  it('should render entire welcome text with input from form', function(done){
    chai.request(app)
    .post('/citizen')
    .send(user)
    .end(function(err, res){
      chai.expect(res.text).to.contain('Mr Lewis Moore, thank you for registering. Your Capital Oneder unique ID tag is:')
      done()
    })
  })
})
