const Person = require('./models/person')
const mongoose = require('mongoose')

mongoose.set('strictQuery',false)


const url = process.env.MONGODB_URI;
console.log('connecting to', url)
mongoose.connect(url)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((err) => console.log(err))

if (process.argv.length == 4) {
    const person = new Person({
        name: process.argv[2],
        number: process.argv[3]
    })
    Person.find({}).then(phoneBook => {
        let isPresent = false;
        phoneBook.forEach(p => {
            if (p.name === person.name) {
                isPresent = true;
                console.log('A person with the same name already founded')
            }
        })
        if(!isPresent) {
            person.save().then(() => {
                console.log('added ' + person.name + ' number ' + person.number + ' to the phonebook')
            })
        }
    })
}

if (process.argv.length == 2) {
    console.log('phonebook:')
    Person.find({}).then(phoneBook => {
        phoneBook.forEach(person => {
            console.log(person.name + ' ' + person.number)
        })
    })
}