const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const should = chai.should();
chai.use(chaiHttp);

describe('Coffee Server', () => {
  it('should have a sample test', () => {
    expect(true).to.equal(true)
  })

  it('should pass this test lmao please', (done) => {
    chai.request(server)
      .get('/api/v1/brews')
      .end((err, res) => {
        res.should.have.status(200);
        done()
      })
  })
})