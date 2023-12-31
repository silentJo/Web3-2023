const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
    `mongodb+srv://jonathancasier:${password}@cluster0.miv3jrz.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('entry', personSchema)

if (process.argv.length == 5) {
    const person = new Person({
        name: name,
        number: number
    })

    person.save().then(result => {
        console.log('added ' + name + ' number ' + number + ' to the phonebook')
        mongoose.connection.close()
    })
}

if (process.argv.length == 3) {
    console.log('phonebook:')
    Person.find({}).then(phoneBook => {
        phoneBook.forEach(person => {
            console.log(person.name + ' ' + person.number)
        })
        mongoose.connection.close()
    })
}