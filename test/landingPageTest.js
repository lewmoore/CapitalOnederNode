const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js');
const expect = chai.expect;
const request = require('request')
chai.use(chaiHttp);

describe('Landing Page', function(){
  it('should load successfully', function(){
    request('http://localhost:8080', function(err, res){
      expect(res).to.have.status(200);
    })
  })

  it('should render a welcome message', function(){
    request('http://localhost:8080', function(err, res) {
      expect(res.text).to.include('Welcome to CapitalOneder, your citizenship is a click away!')
    })
  })
})
