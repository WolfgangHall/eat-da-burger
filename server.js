var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var mysql = require('mysql');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

var PORT = process.env.NODE_ENV || 3000;

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

app.get('/', function(req, res){
    connection.query("SELECT * from burger_table", function(err, result){
        if(err) {
            throw err;
        }
        var data = {
            burger: result
        }
        res.render('index', data);
    })
});

app.post('/', function(req, res) {
  var mySQLQuery = "INSERT INTO burger_table (burger_name) VALUES ('" + req.body.burgerdata + "')";

  connection.query(mySQLQuery, function(err) {
    if (err) {
      throw err
    }
    res.redirect('/');
  });
});

app.get('/delete/:id', function(req, res) {
  var mySQLQuery = "DELETE FROM burger_table WHERE id=" + req.params.id;

  connection.query(mySQLQuery, function(err) {
    if (err) {
      throw err
    }
    res.redirect('/');
  });
});

app.post('/update/:id', function(req, res) {
  var mySQLQuery = "UPDATE burger_table SET burger_name = " + connection.escape(req.body.burger) + " WHERE id=" + connection.escape(req.params.id);
  console.log(mySQLQuery);

  connection.query(mySQLQuery, function(err) {
    if (err) {
      throw err
    }
    res.redirect('/');
  });
});

app.get('/*', function(req, res) {
  res.redirect('/');
});

app.listen(PORT, function (){
    console.log("Listening at %s", PORT);
});