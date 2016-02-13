var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var mysql = require('mysql');

var PORT = process.env.NODE_ENV || 3000;





app.get('/', function(req, res){
    connection.query("SELECT * from burger_table", function(err, result){
        var data = {
         burgers: result,
         layout: ''
        }
    })
});

module.exports() = Orm;