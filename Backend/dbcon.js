
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./dbfile.db')
db.run(`CREATE TABLE if not exists studentdb (
    roll varchar(10) DEFAULT NULL,
    name varchar(50) DEFAULT NULL,
    branch varchar(50),
    mdate date DEFAULT NULL,
    mtime time,
    status varchar(10) DEFAULT NULL
  )`);
 exports.db = db