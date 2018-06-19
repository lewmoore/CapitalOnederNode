const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const expect = chai.expect;
const request = require('request')
const should = chai.should()
chai.use(chaiHttp);

describe('Landing Page', function(){
  it('should load successfully', function(done){
    chai.request(app)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200)
      done()
    })
  })

  it('Renders form text', function(done) {
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res.text).to.include("First Name:");
      done()
    });
  });

  it('Renders welcome text', function(done) {
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res.text).to.include("Welcome to CapitaOneder, your citizenship is a click away!");
    });
    done()
  });

  it('renders form text for Previous Country field', function(done){
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res.text).to.include('Previous Country:')
    })
    done()
  })

  it('renders form text for surname', function(done){
    chai.request(app)
    .get('/')
    .end(function(err, res) {
      expect(res.text).to.include('Surname:')
    })
    done()
  })

  it('renders for text for Sex field', function(done){
    chai.request(app)
    .get('/')
    .end(function(err, res){
      expect(res.text).to.include("Sex:")
    })
    done()
  })

  it('renders text for Title field', function(done){
    chai.request(app)
    .get('/')
    .end(function(err, res){
      expect(res.text).to.include("Title:")
    })
    done()
  })
})
