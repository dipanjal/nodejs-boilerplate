var pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: '5432',
    user: 'wsit',
    password: 'wsit',
    database: 'wsit'
});

module.exports = pool