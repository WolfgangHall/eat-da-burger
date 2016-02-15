var connection = require('../config/connection.js');

var orm = {
    selectAllBurgers: function(cb) {
        var s = 'SELECT * FROM ' + tableInput + ';';
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertIntoBurgers: function(tableInput, cb) {
        var s = "INSERT INTO burger_table (burger_name) VALUES ('" + req.body.burgerdata + "')";
        connection.query(s, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    deleteFromBurgers: function(tableInput, cb) {
        var s = "DELETE FROM burger_table WHERE id=" + req.params.id;
        connection.query(s, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    updateBurgers: function(tableInput, cb) {
        var s = "UPDATE burger_table SET burger_name = " + connection.escape(req.body.burger) + " WHERE id=" + connection.escape(req.params.id);
        connection.query(s, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
};
    
module.exports = orm;