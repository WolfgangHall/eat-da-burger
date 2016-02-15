var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.NODE_ENV || 3000;

app.use(express.static('/public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'))
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(PORT, function (){
    console.log("Listening at %s", PORT);
});