var express = require('express');
var router = express.Router();
var thing = require('../models/burger.js');

//get route -> index
router.get('/index', function(req,res) {
 thing.findAllthings(function(data){
  res.render('index', {data});
 });
});

module.exports = router;