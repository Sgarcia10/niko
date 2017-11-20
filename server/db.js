var mongoose = require('mongoose');
var dbURI = process.env.MONGODB_URI || require('./config.json').connectionURI;

mongoose.connect(dbURI, {
  useMongoClient: true,
  /* other options */
});

mongoose.Promise = global.Promise;

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});


// var MongoClient = require( 'mongodb' ).MongoClient;
//
// var _db;
//
// module.exports = {
//
//   connectToServer: function( callback ) {
//     MongoClient.connect( "mongodb://localhost:27017/marankings", function( err, db ) {
//       _db = db;
//       return callback( err );
//     } );
//   },
//
//   getDb: function() {
//     return _db;
//   }
// };
