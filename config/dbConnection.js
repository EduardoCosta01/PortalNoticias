var mysql = require ('mysql2');

var ConnMysql = function(){
        return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '123456',
        database : 'Portal_noticias',
        });
};

module.exports = function() {
       return ConnMysql;  
};