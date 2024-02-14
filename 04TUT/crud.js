const db = require('./database')

//CREATE
const createArticles = (titre, image, contenu, callback)  => {
    const sql = `INSERT INTO articles (titre, image, contenu) VALUES (?,?,?)`
    db.run(sql, [titre, image, contenu], function(err){
        callback(err, {id: this.lastID})
    })
}

const readArticles = (callback) => {
    const sql = `SELECT * FROM articles`;
    db.all(sql, [], callback)
}

const updateArticles = (id, titre, image, contenu, callback)  => {
    const sql = `UPADATE articles SET titre= ?, image = ?, contenu = ? WHERE id = ?`
    db.run(sql, [titre, image, contenu, id], callback)
}

const deleteArticles = (id, callback)  => {
    const sql = ` DELETE FROM articles WHERE id = ?`
    db.run(sql, id, callback)
}

module.exports = {createArticles, readArticles, updateArticles, deleteArticles}