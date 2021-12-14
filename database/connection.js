const mysql = require('mysql2');


const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
});


module.exports = connect;