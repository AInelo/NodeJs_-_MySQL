const express = require('express')
const {createArticles, readArticles, updateArticles, deleteArticles} = require('./crud')
const cors = require('cors');
const app = express()


app.use(cors());

app.get('/articles', (req, res) => {
    readArticles((err, rows) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).json(rows)
        }
    })
})

app.post('/articles', (req,res) => {
    const {titre, image, contenu} = req.body 
    createArticles(titre, image, contenu, (err, data) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(201).send(`Articles is added ID : ${data.id}`)
        }
    })
})

app.put('/articles/:id', (req, res) => {
    const {titre, image, contenu} = req.body;
    updateArticles(req.params.id, titre, image, contenu, (err) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).send("Updated article")
        }
    })
} )

app.delete('/articles/:id', (req, res) => {

    deleteArticles(req.params.id, (err) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).send("Deleted article")
        }
    })
} )

app.listen(3001, () => {
    console.log("Server is running")
} )