const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1;3306',
    user: 'root',
    password: 'brunel123',
    database: 'nhscwll',
});

db.connect((err) => {
    if(err){
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

module.exports = db;