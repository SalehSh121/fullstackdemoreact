var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mytest");
  var myobj = [
    { fName: 'Sal', lName: 'Sh' , address : 'one magash'},
    { fName: 'Mich', lName: 'Jor' , address : 'Chic'},
    { fName: 'bla', lName: 'It' , address : 'one magash'},
    { fName: 'la', lName: 'It' , address : 'one magash'},
    { fName: 'ww', lName: 'It' , address : 'one magash'}
  
  ];
  dbo.collection("names").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});