const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'trello-api',
    password: '61665786',
    port: 5432,
});

pool.on('connect', () => {
    console.log('DB connected succesfuly!');
});

module.exports = pool;

