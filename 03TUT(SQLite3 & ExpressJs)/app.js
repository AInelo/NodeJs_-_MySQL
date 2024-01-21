const sqlite3 = require('sqlite3').verbose();
let sql;

// connect to DB 
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE,(err)=> {
    if (err) return console.error(err.message);
})

// Create table

// sql = `CREATE TABLE users(id INTERGER PRIMARY KEY,first_name,last_name,username,password,email)`;
// db.run(sql);

// Drop table
// db.run("DROP TABLE users")

// INSERT data inot Database
// sql = `INSERT INTO users(first_name, last_name, username, password, email) VALUES (?,?,?,?,?)`;
// db.run(
//     sql,
//     ["TOTON", "Lionel2", "ainelo", "test", "totonlionel@gmail.com"], 
//     (err)=>{
//     if (err) return console.error(err.message);
// })


// query data from database
sql = `SELECT * FROM users`;
db.all(sql, [], (err,rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row);
    });
})
