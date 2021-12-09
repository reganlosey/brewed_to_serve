const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json())

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Brews Galore'


//Confirm server is running:
app.get('/', (req, res) => {
  res.send('Grind So Fine')
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




app.locals.brews =
  [
    {
      "ProductId": 1,
      "Product": "Amaretto",
      "Product_Type": "Coffee",
      "Type": "Regular"
    },
    {
      "ProductId": 2,
      "Product": "Columbian",
      "Product_Type": "Coffee",
      "Type": "Regular"
    },
    {
      "ProductId": 3,
      "Product": "Decaf Irish Cream",
      "Product_Type": "Coffee",
      "Type": "Decaf"
    },
    {
      "ProductId": 4,
      "Product": "Caffe Latte",
      "Product_Type": "Espresso",
      "Type": "Regular"
    },
    {
      "ProductId": 5,
      "Product": "Caffe Mocha",
      "Product_Type": "Espresso",
      "Type": "Regular"
    },
    {
      "ProductId": 6,
      "Product": "Decaf Espresso",
      "Product_Type": "Espresso",
      "Type": "Decaf"
    },
    {
      "ProductId": 7,
      "Product": "Regular Espresso",
      "Product_Type": "Espresso",
      "Type": "Regular"
    },
    {
      "ProductId": 8,
      "Product": "Chamomile",
      "Product_Type": "Herbal Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 9,
      "Product": "Lemon",
      "Product_Type": "Herbal Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 10,
      "Product": "Mint",
      "Product_Type": "Herbal Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 11,
      "Product": "Darjeeling",
      "Product_Type": "Tea",
      "Type": "Regular"
    },
    {
      "ProductId": 12,
      "Product": "Earl Grey",
      "Product_Type": "Tea",
      "Type": "Regular"
    },
    {
      "ProductId": 13,
      "Product": "Chai Tea",
      "Product_Type": "Tea",
      "Type": "Regular"
    },
    {
      "ProductId": 14,
      "Product": "Lavender",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 15,
      "Product": "Peppermint Tea",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 16,
      "Product": "Valerian Root Tea",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 17,
      "Product": "Cuban",
      "Product_Type": "Coffee",
      "Type": "Regular"
    },
    {
      "ProductId": 18,
      "Product": "Peruvian ",
      "Product_Type": "Coffee",
      "Type": "Regular"
    },
    {
      "ProductId": 18,
      "Product": "Americano",
      "Product_Type": "Espresso",
      "Type": "Regular"
    },
    {
      "ProductId": 19,
      "Product": "English Breakfast",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 20,
      "Product": "Jasmine",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 21,
      "Product": "Oolong",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 22,
      "Product": "Passionflower",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 23,
      "Product": "Ginger",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 24,
      "Product": "Yerba Mate",
      "Product_Type": "Tea",
      "Type": "Regular"
    },
    {
      "ProductId": 25,
      "Product": "White Tea",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 26,
      "Product": "Hibiscus",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 27,
      "Product": "Blueberry",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 28,
      "Product": "Vanilla",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 29,
      "Product": "Spiced Apple",
      "Product_Type": "Tea",
      "Type": "Decaf"
    },
    {
      "ProductId": 30,
      "Product": "Blood Orange",
      "Product_Type": "Tea",
      "Type": "Decaf"
    }
  ]