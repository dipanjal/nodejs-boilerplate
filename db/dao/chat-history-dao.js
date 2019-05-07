var getPostgrePool = require('../connectors/postgres-connector');
var knex = require('../connectors/postgre-knex-connector');

ChatHistoryDao = function(){}

ChatHistoryDao.getAllChats = (limit,callback) => {
    let queryString = "SELECT id,name,message,"+
    "(created_date_time AT TIME ZONE 'UTC+6') dateTime FROM test_schema.chat_history LIMIT $1"

    // let knexQuery = knex.select('*').from('test_schema.chat_history').limit(limit)
    // console.log(knexQuery)

    getPostgrePool.query(queryString,[limit], (err,result) => {
        if(err){
            console.log('pgSqlError:', err)
            callback(err,null);
        }else{
            callback(null,result.rows);
        }
    }); 
};


// ChatHistoryDao.getAllChats = (limit,callback) => {
//     console.log('--knex try')
//     // let knexQuery = knex.select('*').from('test_schema.chat_history').limit(limit)
//     knex.from('cars').select("*")
//     .then((rows) => {
//         callback(null,rows);
//     }).catch((err) => { 
//         callback(err,null);
//     }).finally(() => {
//         knex.destroy();
//     });
// };

module.exports = ChatHistoryDao;