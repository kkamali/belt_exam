console.log('mongo connection, mongoose setup');
//This file is complete other than changing our DB
var mongoose = require('mongoose'),
/*
*  require file-system so that we can load, read, require all of the model files
*/
    fs = require('fs'),
/*
*  utilize path for easy dir/file joining
*/
    path = require('path'),
/*
*  Dir where our models are located
*/
    models_path = path.join( __dirname, "../models"),
/*
*   Regular expression that checks for .js extension
*/
    reg = new RegExp( ".js$", "i" ),
/*
*  database information
*/
    dbURI = 'mongodb://localhost/belt_exam';
/*
* Connect to the database
*/
mongoose.Promise = global.Promise;
mongoose.connect( dbURI );
/*
*  CONNECTION EVENTS
*  When successfully connected
*/
mongoose.connection.on( 'connected', function () {
});
/*
*  If the connection throws an error
*/
mongoose.connection.on( 'error', function ( err ) {
});
/*
*  When the connection is disconnected
*/
mongoose.connection.on( 'disconnected', function () {
});
/*
*  If the Node process ends, close the Mongoose connection
*/
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    process.exit( 0 );
  });
});
/*
*  read all of the files in the models dir and
*  check if it is a javascript file before requiring it
*/
fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
});
