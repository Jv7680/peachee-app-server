import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'peachee_app',
//     password: '123456'
// })

const pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bee87c3a47a587',
    database: 'heroku_215a8b89965d9c7',
    password: '656fbff6'
})

export default pool;