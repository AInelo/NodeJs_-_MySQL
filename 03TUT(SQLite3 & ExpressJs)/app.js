const sqlite3 = require('sqlite3').verbose();
let sql;

// connect to DB 
const db = new sqlite3.Database("./test2.db", sqlite3.OPEN_READWRITE,(err)=> {
    if (err) return console.error(err.message);
})

// Create table

// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT,first_name VARCHAR(255),last_name VARCHAR(255),username VARCHAR(255),password VARCHAR(255),email VARCHAR(255))`;
// db.run(sql);

// Drop table
// db.run("DROP TABLE users")

// INSERT data inot Database
sql = `INSERT INTO users(first_name, last_name, username, password, email) VALUES (?,?,?,?,?)`;
db.run(
    sql,
    ["TOTON", "Lionel", "ainelo2", "test", "totonlionel@gmail.com"], 
    (err)=>{
    if (err) return console.error(err.message);
})

// Update data
// sql = `UPDATE users SET first_name = ? WHERE id= ?`;
// db.run(sql, ['Lio'])

// query data from database
// sql = `SELECT * FROM users`;
// db.all(sql, [], (err,rows) => {
//     if (err) return console.error(err.message);
//     rows.forEach((row) => {
//         console.log(row);
//     });
// })
