const mysql = require("mysql2");

const db = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"password",
    database:"student_portfolio_db"

});

module.exports = db;
