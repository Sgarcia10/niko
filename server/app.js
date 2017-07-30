// Get dependencies

require('rootpath')();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Get our API routes
const api = require('./routes/api');

//DB connection

require('./db');
// var mongoUtil = require( './db' );
//
// mongoUtil.connectToServer( function( err ) {
//   // start the rest of your app here
//   if(!err)
//   console.log("Connected successfully to server");
// } );

//Get express  ..

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

module.exports = app;
