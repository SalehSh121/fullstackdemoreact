var express = require('express');
var app = express();



// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods','PUT,GET, POST, PATCH, DELETE');
  
    next();
  });




var cars = require('./routes/cars.js');
var names = require('./routes/names.js');
var food = require('./routes/food.js');

app.use('/cars',cars);
app.use('/names',names);
app.use('/food',food);


app.listen(3000);