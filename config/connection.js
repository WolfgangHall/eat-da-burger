var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var mysql = require('mysql');


var PORT = process.env.NODE_ENV || 3000;

var connection = mysql.createConnection({
    port : '3000',
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

connection.connect(function(err){
    if (err) {
        console.log("Error", err.stack);
    }
    console.log("Connected as id: %s", connection.threadId);
});


app.listen(PORT, function (){
    console.log("Listening at %s", PORT);
});

module.exports = Connection;