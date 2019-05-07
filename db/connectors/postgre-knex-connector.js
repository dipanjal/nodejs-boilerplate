var knex = require('knex')({
    client: 'pg',
    connection: {
        host : 'localhost',
        port: '5432',
        user: 'wsit',
        password: 'wsit',
        database: 'wsit'
      }
});

module.exports = knex