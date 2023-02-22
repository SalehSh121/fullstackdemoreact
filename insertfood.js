var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mytest");
  var myobj = [
    { foodName: 'Pizza', foodType: 'It' , foodQ : 'one magash'},
    { foodName: 'Burger', foodType: 'Am' , foodQ : 'one '},
    { foodName: 'Magluba', foodType: 'Ar' , foodQ : 'one tungara'},
    { foodName: 'Layali Beirut', foodType: 'Lebenanse' , foodQ : 'one safat'},
    { foodName: 'Tantuni', foodType: 'Tur' , foodQ : 'orange tanan'},
  
  ];
  dbo.collection("food").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});