var getMysqlConnection = require('../connectors/mysql-connector');

var USCityDao = function(){}

USCityDao.getAllCities = (callback) => {
    //getting mysql connection
    getMysqlConnection(function(err, connection){
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

module.exports = USCityDao;