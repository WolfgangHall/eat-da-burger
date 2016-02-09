var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var mysql = require('mysql');


var PORT = process.env.NODE_ENV || 3000;

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
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

app.get('/', function(req, res){
    connection.query("SELECT * from burger_table;", function(err, result){
        res.send(result);
    })
});

app.listen(PORT, function (){
    console.log("Listening at %s", PORT);
});