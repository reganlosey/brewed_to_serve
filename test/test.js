const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const should = chai.should();

describe('Coffee Server', () => {
  it('should be able to make a successful GET request', (done) => {
    chai.request(server)
      .get('/brews')
      .end((err, res) => {
        res.should.have.status(200);
        done()
      })
  })

  it('should return a single brew when given an id', (done) => {
    const brewId = 5;
    chai.request(server)
      .get('/brews/' + brewId)
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

  it('should be able to POST a new object if API key is present', (done) => {
    const brewId = Date.now();
    chai.request(server)
      .post("/brews")
      .set('API-key', process.env.API_KEY)
      .send({
        'id': brewId,
        'productName': 'Chai',
        'type': 'Tea',
        'price': 10,
        'hasCaffeine': true
      })
      .end((err, res) => {
        res.should.have.status(201);
      })
    done()
  })

  it('should NOT be able to POST a new brew without the correct API key present', (done) => {
    const brewId = Date.now();
    chai.request(server)
      .post('/brews')
      .send({
        'id': brewId,
        'productName': 'Chai',
        'type': 'Tea',
        'price': 10,
        'hasCaffeine': true
      })
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('error').eq("Howdy🤠 I'm currently disallowing POST requests. If you'd like access, please email me to discuss your usage :) ")
      })
    done()
  })

})