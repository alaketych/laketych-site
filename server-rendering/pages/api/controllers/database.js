const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gzb8f1',
    database: 'laketychblog'
})

connection.connect(error => {
    if(error) throw error
    console.log('Connected to the MySQL server.')
})

module.exports = connection