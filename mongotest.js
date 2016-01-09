var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://pfweb:passw0rd@129.41.143.55:27017/pfdbv3';
console.log('Using url '+ url);
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});
console.log('Done');
