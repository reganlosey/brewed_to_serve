# [☕  Brewed To Serve 🍵](https://brewedtoserve.herokuapp.com/)

...get it?
<sup style="font-size:5px">because it's a API and serves info about brewed drinks? I thought it was funny</sup>

<br>
<br>

<h2 style="text-decoration: underline">Overview:</h2>

[Brewed to Serve](https://brewedtoserve.herokuapp.com/) is an API built with Node and Express.js to host a variety of coffee and tea data.
This was a super fun side project and a great opportunity for me to practice my abilities writing backend Javascript.
I'd had some experience creating an API for a group project when I was in school but I enjoyed the challenge of writing one myself and having a lot of creative freedom.

<br>



### Technologies Used:
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>

## Available endpoints: 

The base path to access the API is:

```
https://brewedtoserve.herokuapp.com/{query}
```
Where `query` is replaced with one of the following endpoints:

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

<strong> Note: I am currently requiring an API key to be present in order to POST to the API. If you'd like access, please feel free to reach out to me at reganloseydev@gmail.com :) </strong>

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

### Contributors: 
[Regan Losey](https://github.com/reganlosey)


### Future Iterations:
1. Implement database.
2. Expand information included in each object. (Ex: ingredients and description of each beverage, images, etc.)


### Resources: 
- [Expressjs.com](https://expressjs.com/)
- [Nodejs.org](https://nodejs.org/en/)
- [Frontend.turing.edu](https://frontend.turing.edu/lessons/module-3/express.html)


