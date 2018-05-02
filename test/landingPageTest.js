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
  //
  // it('should render a welcome message', function(){
  //   request('http://localhost:8080', function(err, res, body) {
  //     expect(res.text).to.include('Welcome to CapitalOneder, your citizenship is a click away!')
  //   })
  // })

  // it('renders a form asking for users name', function(){
  //   request('http://localhost:8080', function(err, res, body){
  //     expect(res.body).to.include('First Name:')
  //   })
  // })

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
      console.log(res.text)
      expect(res.text).to.include("Welcome to CapitaOneder, your citizenship is a click away!");
    });
  });
})
