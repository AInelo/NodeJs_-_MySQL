import express from "express";

import { getNote, getNotes, createNote } from "./database";



const app = express()


app.get("/notes", async (req,res) => {
    const notes = await getNotes()
    res.send(notes)
})

app.use((err, req,res, next) => {
    console.error(err.stack)
    res.status(500).send('Something Broke!')
})

app.listen(8001, () => {
    console.log('Server is running on port 8001')
})