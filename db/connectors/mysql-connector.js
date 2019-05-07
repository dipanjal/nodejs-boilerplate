var mysql = require('mysql');
var mysqlPool = mysql.createPool({
    host     : '172.18.1.11',
    user     : 'root',
    password : 'wsit97480',
    database : 'us_city_info'
});

var getMysqlConnection = function(callback) {
    mysqlPool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};


module.exports = getMysqlConnection;