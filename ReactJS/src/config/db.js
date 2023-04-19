import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'DB'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server!');
})

module.exports = connection;