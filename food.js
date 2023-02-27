var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


router.get('/', function(req, res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mytest");
        dbo.collection("food").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
          
          res.send(result);
      
        });
      }); });

 router.get('/:id([a-z]{5})', function(req, res){
    res.send('<h1>Pizza</h1><br><h1>Tantuni</h1><br><h1>Hamburger </h1>' + req.params.id);
 });

//export this router to use in our index.js
module.exports = router;