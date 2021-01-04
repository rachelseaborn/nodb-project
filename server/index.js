
//import express
const express = require('express');
//invoke express to access its framework functionality. Giant object with properties for server management 
const app = express();
//app.use(express.json());

const ctrl = require('./controller');
const data = require('../src/data.json');
const port = 3713;

//app.use(express.json)
//endpoints - gateways to server data. Define how client can request data from server.

app.get('/api/recipes', ctrl.getRecipes)

//get needs a cb. Err may say 'route.get...'
//If using a query or body, don't need to add anything. Syntax below for using params.
//browser testing ex: localhost:3713/api/recipe/2

//app.get('/api/recipe/:id', ctrl.getSingleRecipe)


//Fn that takes 2 args: 1) port to listen to, 2) cb function. Put below endpoints.

app.listen(port, () => console.log(`Server listening on port ${port}`))

