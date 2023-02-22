var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mytest");
  var myobj = [
    { carName: 'BMW', carType: 'M44' , carColor : 'orange mat'},
    { carName: 'AUDI', carType: 'M22' , carColor : 'orange mat'},
    { carName: 'SUBARU', carType: 'SS' , carColor : 'orange mat'},
    { carName: 'TOYOTA', carType: 'WW' , carColor : 'orange mat'},
    { carName: 'SOSETA', carType: 'AA' , carColor : 'orange mat'}
  
  ];
  dbo.collection("cars").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});