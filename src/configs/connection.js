const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_icafe'
});

connection.connect((err)=>{
    if(err) throw err;
    return console.log('Conections OK')
})

module.exports = connection;
