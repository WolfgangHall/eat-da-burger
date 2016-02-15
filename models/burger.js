var orm = require('../config/orm.js');

var burgers = {
    findAllburgers: function(cb) {
       orm.selectAllBurgers('burger_table', function(res){
         cb(res)
     });
  },
    insertIntoBurgers: function(cb) {
        orm.insertIntoBurgers('burger_table', function(res){
            cb(res);
        });
    },
    deleteFromBurgers: function(cb) {
        orm.deleteFromBurgers('burger_table', function(res){
            cb(res);
        });
    },
    updateBurgers: function(cb) {
        orm.updateBurgers('burger_table', function (res){
            cb(res);
        });
    }
};

module.exports = burgers;