import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()
//DATABASE Connection (That can be a database on a cloud, but this time we will use it as local database)
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()



export async function getNotes () {
    const [rows] = await pool.query('SELECT * FROM notes')
    return rows 
}


export async function getNote(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM notes
    WHERE id = ?
    `, [id]) // To avoid SQL injection attacks
    return rows[0]
}

export async function createNote(title, content) {
    const result = await pool.query(`
    INSERT INTO notes (title, contents)
    VALUES (?, ?)
    `, [title, content])
    return result
}

const result = await createNote('test3', 'test3')
console.log(result)

// const notes = await getNote(100)
// //const rows = result[0]
// console.log(notes)