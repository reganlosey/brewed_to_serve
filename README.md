# [☕  Brewed To Serve 🍵](https://brewedtoserve.herokuapp.com/)

...get it?
<sup style="font-size:5px">because it's a API and serves info about brewed drinks? I thought it was funny</sup>

<br>
<br>

### Overview:
Brewed to Serve is an API built with Node and Express.js to host a variety of coffee and tea data.
This was a super fun side project and a great opportunity for me to practice my abilities writing backend Javascript.
I'd had some experience creating an API for a group project when I was in school but I enjoyed the challenge of writing one myself and having a lot of creative freedom.
<br>


### Contributors: 

[Regan Losey](https://github.com/reganlosey)


### Technologies Used:
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>

## Available endpoints: 

The base path to access the API is:

```
https://brewedtoserve.herokuapp.com/
```

### Get all brews

`GET /brews/`

Returns an array of objects containing tea and coffee information

Example response:

```
	
[
  {
    id: 1,
    productName: "Amaretto",
    type: "Coffee",
    price: 10,
    hasCaffeine: true
  },
  {
    id: 2,
    productName: "Columbian",
    type: "Coffee",
    price: 10,
    hasCaffeine: true
  },
  {
    id: 3,
    productName: "Peruvian",
    type: "Coffee",
    price: 10,
    hasCaffeine: false
  }
]
```

### Get A Single Brew:

`GET /brews/:id`

Returns a single brew that matches the matches the provided ID. If no objects match the given ID, a 404 status code and error message will be returned.

Example response:
```
  {
    id: 1,
    productName: "Amaretto",
    type: "Coffee",
    price: 10,
    hasCaffeine: true
  }
```
<br>

### Create A New Brew:

`POST /brews/`

Returns a 201 status code. If there is an issue with creating the brew, a 400 level status code will be returned with a description of the issue.
```
Content-Type: application/json
Accept: application/json
{
    id: 1,
    productName: "Amaretto",
    type: "Coffee",
    price: 10,
    hasCaffeine: true
}
```

<br>

### Future Iterations:
1. Store posted brews in database.
2. Expand information included in each object. (Ex: ingredients and description of each beverage, images, etc.)


### Resources: 
- [Expressjs.com](https://expressjs.com/)
- [Nodejs.org](https://nodejs.org/en/)
- [Frontend.turing.edu](https://frontend.turing.edu/lessons/module-3/express.html)


