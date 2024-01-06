require('dotenv').config()
require('./mongo')
const Person = require('./models/person.js')
const express = require('express')
const app = express()
app.use(express.json)

app.post('/', (request, response) => {
    const body = request.body
    if (body.content === undefined) return response.status(400).json({error: 'content missing'})
    const person = new Person({content: body.content})
    person.save().then(savedperson => {response.json(savedperson)})
})

app.get('/', (request, response) => {
    Person.find({}).then(persons => {response.json(persons)})
})

app.get('/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {response.json(person)})
})

app.delete("/:id", (request, response, next) => {
    Person.findByIdAndRemove(request.params.id).then(result => {
        if (result) response.json(result)
        else throw new NotFoundError()
    }).catch(err => next(err))
})

const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})
