const sqlite3 = require('sqlite3').verbose()
const dbname = 'database.db'

let db = new sqlite3.Database(dbname, (err) =>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("Connected to the Database")
        db.run('CREATE TABLE IF NOT EXISTS articles (id INTEGER PRIMARY KEY AUTOINCREMENT, titre TEXT, image TEXT, contenu TEXT)', (err) => {
            if(err){
                console.error(err.message)
            }else{
                console.log("Table created or existed")
            }
        })
    }
})

module.exports = db