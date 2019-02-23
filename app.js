// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');
//
// // Connection URL
// var url = 'mongodb://localhost:27017/huis';
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//
//   insertDocuments(db, function() {
//     findDocuments(db, function() {
//       db.close();
//     });
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("huis");
//   dbo.collection("nieuwHuis").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.adres + result.prijs);
//     db.close();
//   });
// });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("huis");
  dbo.collection("nieuwHuis").find({}).toArray(function(err, result) {
    if (err) throw err;
    // console.log(result);
    // result.forEach(function(element){
    //   console.log(element.adres)
    // })
    db.close();
    result.forEach(function(element){
      console.log(element.adres)
      // document.getElementById('huizen').innerHTML += "<p>" + element.adres + "</p>";
    })
  });

});
