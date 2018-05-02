const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;
chai.use(chaiHttp);

describe('Landing Page', function(){
  it('should load successfully', function(){
    chai.request(app)
    .get('/')
    .end(function(err, res){
      expect(res).to.have.status(200);
    })
  })
})
