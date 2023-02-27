var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/', function(req, res){

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mytest");
        dbo.collection("names").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
          
          res.send(result);
      
        });
      });

 });


 router.get('/:id([A-Z]{7})', function(req, res){
    res.send('<h1>mEEN sAMIR</h1>' + req.params.id);
 });

 
//export this router to use in our index.js
module.exports = router;