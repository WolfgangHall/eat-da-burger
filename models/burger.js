var Orm = require('/config/orm.js');

var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var mysql = require('mysql');

var PORT = process.env.NODE_ENV || 3000;





app.get('/', function(req, res){

    var burgerInput = document.getElementById('burgerInput');
    connection.query("INSERT INTO burger-table (name) VALUES (?)", (burgerInput), function(err, result){
        var data = {
           burgers: result,
           layout: ''
       }
   })
});


module.exports = Burger;