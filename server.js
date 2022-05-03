const fetch = require('node-fetch');
const express = require('express');
const app = express();
const NodeCache = require('node-cache');
const cache = new NodeCache();
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
uuidv4();
require('dotenv').config();

app.use(express.json());
app.use(cors());

// Enable CORS for all routes and for specific API-Key header
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, API-Key')
  next()
})

app.set('port', process.env.PORT || 8001);
app.locals.title = 'Brewed To Serve(r)'

//Confirm server is running:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'))
});

//Serve all files in 'ui' folder
app.use(express.static(path.join(__dirname, 'src')))

//Console.log for confirmation that server is running
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});


//Send all brews upon visit
app.get('/brews', async (req, res) => {
  const storedBrews = cache.get('allBrews')
  if (storedBrews) {
    res.send(storedBrews)
  } else {
    cache.set('allBrews', app.locals.brews)
    res.send(app.locals.brews)
  }
})

// Send a single brew upon visit
app.get('/brews/:id', (req, res) => {
  const brewId = req.params.id
  const allBrews = app.locals.brews
  const foundBrew = allBrews.find(brew => brew.id === parseInt(brewId))
  if (!foundBrew) {
    return res
      .status(404)
      .json({
        message: `Error: No brew with id of ${brewId} found.`
      })
  }
  res.status(200).json(foundBrew)
  return foundBrew

})

//Send error on visit to any undefined routes
app.get('*', (req, res) => {
  res.status(404).send({
    error: `404: Route not found`
  })
})

// PROTECT ALL ROUTES THAT FOLLOW
app.use((req, res, next) => {
  const apiKey = req.get('API-key')
  if (!apiKey || apiKey !== process.env.API_KEY) {
    res
      .status(401).
      json({ error: "Howdy🤠 I'm currently disallowing POST requests. If you'd like access, please email me to discuss your usage :) " })
  } else {
    next()
  }
})

//POST data here, if authorized API key is present:
app.post('/brews', (req, res) => {
  const brew = req.body;
  const id = uuidv4()
  const brewError = app.locals.brews.find(localBrew => localBrew.productName === brew.productName)
  for (let requiredParameter of ['productName', 'type']) {
    if (!brew[requiredParameter]) {
      res
        .status(422)
        .send({
          error: `Expected format: {name: <String>, type: <String>}. You\'re missing a "${requiredParameter}" property.
        `
        })
    }
  }
  if (brewError) {
    res.status(422).send({
      error: `Brew with productName ${brewError.productName} already exists`
    })
  } else {
    const { productName, type, price, hasCaffeine } = brew;
    app.locals.brews.push({ id, productName, type, price, hasCaffeine })
    res.status(201).json({ id, productName, type, price, hasCaffeine })

  }
})


app.locals.brews = [{
  id: 1,
  productName: 'Amaretto',
  type: 'Coffee',
  price: 10,
  hasCaffeine: true
},
{
  id: 2,
  productName: 'Columbian',
  type: 'Coffee',
  price: 10,
  hasCaffeine: true
},
{
  id: 3,
  productName: 'Peruvian',
  type: 'Coffee',
  price: 10,
  hasCaffeine: false
},
{
  id: 4,
  productName: 'Cappucino',
  type: 'Espresso',
  price: 10,
  hasCaffeine: true
},
{
  id: 5,
  productName: 'Caffe Mocha',
  type: 'Espresso',
  price: 10,
  hasCaffeine: true
},
{
  id: 6,
  productName: 'Decaf Espresso',
  type: 'Espresso',
  price: 10,
  hasCaffeine: false
},
{
  id: 7,
  productName: 'Regular Espresso',
  type: 'Espresso',
  price: 10,
  hasCaffeine: true
},
{
  id: 8,
  productName: 'Chamomile',
  type: 'Herbal Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 9,
  productName: 'Lemon',
  type: 'Herbal Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 10,
  productName: 'Mint',
  type: 'Herbal Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 11,
  productName: 'Darjeeling',
  type: 'Tea',
  price: 10,
  hasCaffeine: true
},
{
  id: 12,
  productName: 'Earl Grey',
  type: 'Tea',
  price: 10,
  hasCaffeine: true
},
{
  id: 13,
  productName: 'Chai Tea',
  type: 'Tea',
  price: 10,
  hasCaffeine: true
},
{
  id: 14,
  productName: 'Lavender',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 15,
  productName: 'Peppermint Tea',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 16,
  productName: 'Valerian Root Tea',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 17,
  productName: 'Cuban',
  type: 'Coffee',
  price: 10,
  hasCaffeine: true
},
{
  id: 18,
  productName: 'Peruvian',
  type: 'Coffee',
  price: 10,
  hasCaffeine: true
},
{
  id: 19,
  productName: 'Americano',
  type: 'Espresso',
  price: 10,
  hasCaffeine: true
},
{
  id: 20,
  productName: 'English Breakfast',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 21,
  productName: 'Jasmine',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 22,
  productName: 'Oolong',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 23,
  productName: 'Passionflower',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 24,
  productName: 'Ginger',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 25,
  productName: 'Yerba Mate',
  type: 'Tea',
  price: 10,
  hasCaffeine: true
},
{
  id: 26,
  productName: 'White Tea',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 27,
  productName: 'Hibiscus',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 28,
  productName: 'Blueberry',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 29,
  productName: 'Vanilla',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 30,
  productName: 'Blood Orange',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
},
{
  id: 31,
  productName: 'Spiced Apple',
  type: 'Tea',
  price: 10,
  hasCaffeine: false
}
]

module.exports = app;