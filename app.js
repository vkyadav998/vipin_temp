var express = require('express');
var app = express();
var router = express.Router();
var mongodb = require("mongodb");

var dbHost = "mongodb://localhost:27017/Vipin";

var dbObject;
var MongoClient = mongodb.MongoClient;

MongoClient.connect(dbHost, function(err, db){
  if ( err ) throw err;
  dbObject = db;
});


app.listen(3001, function () {
	console.log(dbObject);
  console.log('Example app listening on port 3000!');
});


