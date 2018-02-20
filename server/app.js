// Get dependencies
const nodemailer = require('nodemailer');
require('rootpath')();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var helmet = require('helmet');

// Get our API routes
const api = require('./routes/api');

//DB connection

require('./db');

// var transporter = nodemailer.createTransport({
//     host: 'smtp.office365.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'es.garcia430@uniandes.edu.co', // generated ethereal user
//         pass: 'Anillo14'  // generated ethereal password
//     },
//     greetingTimeout: 4000
// });
//
// transporter.verify((err, success)=>{
//     if(err) console.log(err);
//     else console.log('mail is ok');
// });
//
// var mailOptions = {
//     from: 'es.garcia430@uniandes.edu.co', // sender address
//     to: 'garciasantiago10@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world?' // plain text body
// };
//
// // send mail with defined transport object
// transporter.sendMail(mailOptions, (info, err) => {
//     if (info) console.log(info);
//     else if (err) {
//         console.log(err);
//     }
// });

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

app.use(helmet());

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

module.exports = app;
