const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json())

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Brews Galore'


//Confirm server is running:
app.get('/', (req, res) => {
  res.send('Grind So Fine')
  console.log('REQUEST<><>',req.params)
  console.log('RESPONSE<><>', res.params)
});

//Console.log for confirmation
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

//Send all brews upon visit
app.get('/api/v1/brews', (req, res) => {
  const brews = app.locals.brews
  res.json(brews)
})

//Send a single brew upon visit
app.get('/api/v1/brews/:id', (req, res) => {
  const brewId = req.params.id
  const foundBrew = app.locals.brews.find(brew => brew['ProductId'] === brewId)

  if(!foundBrew){
    return brewId
  }
  res.json(foundBrew)
})


//POST data here :
app.post('/api/v1/brews', (req, res) => {
  const id = Date.now()
  const brew = req.body;
  console.log(brew)
})



app.locals.brews =
  [
    {
      id: 1,
      productName: "Amaretto",
      type: "Coffee",
      hasCaffeine: true
    },
    {
      id: 2,
      productName: "Columbian",
      type: "Coffee",
      hasCaffeine: true
    },
    {
      id: 3,
      productName: "Decaf Irish Cream",
      type: "Coffee",
      hasCaffeine: false
    },
    {
      id: 4,
      productName: "Caffe Latte",
      type: "Espresso",
      hasCaffeine: true
    },
    {
      id: 5,
      productName: "Caffe Mocha",
      type: "Espresso",
      hasCaffeine: true
    },
    {
      id: 6,
      productName: "Decaf Espresso",
      type: "Espresso",
      hasCaffeine: false
    },
    {
      id: 7,
      productName: "Regular Espresso",
      type: "Espresso",
      hasCaffeine: true
    },
    {
      id: 8,
      productName: "Chamomile",
      type: "Herbal Tea",
      hasCaffeine: false
    },
    {
      id: 9,
      productName: "Lemon",
      type: "Herbal Tea",
      hasCaffeine: false
    },
    {
      id: 10,
      productName: "Mint",
      type: "Herbal Tea",
      hasCaffeine: false
    },
    {
      id: 11,
      productName: "Darjeeling",
      type: "Tea",
      hasCaffeine: true
    },
    {
      id: 12,
      productName: "Earl Grey",
      type: "Tea",
      hasCaffeine: true
    },
    {
      id: 13,
      productName: "Chai Tea",
      type: "Tea",
      hasCaffeine: true
    },
    {
      id: 14,
      productName: "Lavender",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 15,
      productName: "Peppermint Tea",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 16,
      productName: "Valerian Root Tea",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 17,
      productName: "Cuban",
      type: "Coffee",
      hasCaffeine: true
    },
    {
      id: 18,
      productName: "Peruvian ",
      type: "Coffee",
      hasCaffeine: true
    },
    {
      id: 18,
      productName: "Americano",
      type: "Espresso",
      hasCaffeine: true
    },
    {
      id: 19,
      productName: "English Breakfast",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 20,
      productName: "Jasmine",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 21,
      productName: "Oolong",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 22,
      productName: "Passionflower",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 23,
      productName: "Ginger",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 24,
      productName: "Yerba Mate",
      type: "Tea",
      hasCaffeine: true
    },
    {
      id: 25,
      productName: "White Tea",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 26,
      productName: "Hibiscus",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 27,
      productName: "Blueberry",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 28,
      productName: "Vanilla",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 29,
      productName: "Spiced Apple",
      type: "Tea",
      hasCaffeine: false
    },
    {
      id: 30,
      productName: "Blood Orange",
      type: "Tea",
      hasCaffeine: false
    }
  ]