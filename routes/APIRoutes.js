'use strict';
module.exports = function(app){
    var api = require('../controllers/APIcontroller');
    app.post('/api/withdraw', api.withdraw);

    //withdraw ticket to FLP token
    // localhost:3000/api/withdraw
    /*
    {
        address: "",
        amount: 50
    }
    */
}