import mysql from "mysql2"

//DATABASE Connection (That can be a database on a cloud, but this time we will use it as local database)
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Lionel.20024',
    database: 'notes_app'
}).promise()



async function getNotes () {
    const [rows] = await pool.query('SELECT * FROM notes')
    return rows 
}


const notes = await getNotes()
//const rows = result[0]
console.log(notes)