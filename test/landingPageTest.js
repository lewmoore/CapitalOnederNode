const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;
const request = require('request')
chai.use(chaiHttp);

describe('Landing Page', function(){
  it('should load successfully', function(){
    request('http://localhost:8080', function(err, res){
      expect(res).to.have.status(200);
    })
  })

  it('Renders form text', function() {
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      console.log(res.text)
      expect(res.text).to.include("First Name:");
    });
  });

  it('Renders welcome text', function() {
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res.text).to.include("Welcome to CapitaOneder, your citizenship is a click away!");
    });
  });

  it('renders form text for Previous Country field', function(){
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res.text).to.include('Previous Country:')
    })
  })

  it('renders form text for surname', function(){
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res.text).to.include('Surname:')
    })
  })

  it('renders for text for Sex field', function(){
    chai.request(app)
    .get('/')
    .end(function(err, res){
      expect(res.text).to.include("Sex:")
    })
  })
})
