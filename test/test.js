const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const should = chai.should();
chai.use(chaiHttp);

describe('Coffee Server', () => {
  // it('should have a sample test', () => {
  //   expect(true).to.equal(true)
  // })
  describe('Coffee Server Tests', () => {
    it('should be able to make a successful GET request', (done) => {
      chai.request(server)
      .get('/api/v1/brews')
      .end((err, res) => {
        res.should.have.status(200);
        done()
      })
    })
    
    it('should return a single coffee when given an id', (done) => {
      const brewId = 5;
      chai.request(server)
      .get('/api/v1/brews/' + brewId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('productName')
        res.body.should.have.property('type').eq('Espresso')
        res.body.should.have.property('price').eq(10)
        res.body.should.have.property('hasCaffeine').eq(true)
        done()
      })
    })
  })
})