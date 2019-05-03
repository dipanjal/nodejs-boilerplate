var mysql = require('mysql');


var pool = mysql.createPool({
    host     : '172.18.1.11',
    user     : 'root',
    password : 'wsit97480',
    database : 'us_city_info'
});

// connection.connect(function(err) {
//     if (err) throw err;
// });

var getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};


module.exports = getConnection;