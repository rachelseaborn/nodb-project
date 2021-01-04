//import express
const express = require('express');
//invoke express to access its functionality. Giant object with properties for server management 
const app = express();
const port = 3713;

//endpoints
app.get('/api/recipes')


//Fn that takes 2 args; put at bottom 
app.listen(port, () => console.log(`Server listening on port ${port}`))

