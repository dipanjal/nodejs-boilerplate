var getConnection = require('./db');

var USCity = function(){};

USCity.getAll = (callback) => {
    //getting mysql connection
    getConnection(function(err, connection){
        if (err){
            //if error in connection
            console.log(err)
            callback(err,null)
        }
        else{
            queryString = "SELECT * FROM cities_extended LIMIT 20"
            connection.query(queryString,function(err,res){
                connection.release()
                if (err){
                    //if error in query
                    console.log('mysqlError:', err)
                    callback(err,null)
                }else{
                    callback(null,res)
                }
            });
        }
    });
};

module.exports = USCity;