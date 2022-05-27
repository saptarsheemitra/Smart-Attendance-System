const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
//vinit
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "hackathon",
    password: "vinitagarwal",
});

module.exports = pool.promise();
