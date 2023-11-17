require('dotenv').config()
require('./mongo')
const Person = require('./models/person.js')
const express = require('express')
const app = express()
app.use(express.json)

app.post('/api/persons', (request, response) => {
    const body = request.body
    if (body.content === undefined) return response.status(400).json({error: 'content missing'})
    const person = new Person({content: body.content})
    person.save().then(savedperson => {response.json(savedperson)})
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {response.json(persons)})
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {response.json(person)})
})

const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})
