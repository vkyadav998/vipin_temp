
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var insertDocument = function(abcd, callback) {
   abcd.collection('mycollection').insertOne( {
      "address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
		 
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : new Date("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : new Date("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
   }, function(err, result) {
    //assert.equal(err, null);
	if(err) {
		console.log(err);
	} else {
		console.log("Inserted a document into the  collection." + err);    	
	}
	
    callback();
  });
};

MongoClient.connect(url, function(err, abcd) {
  assert.equal(null, err);
  insertDocument(abcd, function() {
      abcd.close();
  });
});