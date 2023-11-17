require('dotenv').config()
const Note = require('./models/note')
const express = require('express')
const app = express()
app.use(express.json())

app.post('/api/notes', (request, response) => {
    const body = request.body
    if (body.content === undefined) {
        return response.status(400).json({ error: 'content missing' })
    }
    const note = new Note({
        content: body.content,
        important: body.important || false,
    })
    note.save().then(savedNote => {
        response.json(savedNote)
    })
})

app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
        response.json(notes)
    })
})

app.get('/api/notes/:id', (request, response) => {
    Note.findById(request.params.id).then(note => {
        response.json(note)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
