var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

//connect away
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err,Vipin) {
  if (err) throw err;
  console.log("Connected to Database");

  //create collection
	Vipin.createCollection("testCollection", function(err, collection){
	   if (err) throw err;

	   	console.log("Created testCollection");
	 		console.log(collection);
	});
});