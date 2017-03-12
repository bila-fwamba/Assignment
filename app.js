var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');
//var mLab = require ('mongolab-data-api')('us8zsahBeSdGKNcVuPmJ1lm9X7dY76y');
//create an express app
var app = express();
//create routing object
var config = require('./config');
//configure the express app to parse JSON-formatted body
app.use(bodyParser.json());
app.use(helmet());

//add route for the root
app.get('/',function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("We're up and running!!!");
});
var products = require('./api/products/index');
//Add routes for products api
app.get('/api/products',products.index);
app.post('/api/products',products.create);
app.put('/api/products/:id',products.update);
app.delete('/api/products/:id',products.delete);
// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000)
// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

