const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('connected')
        Note.find({}).then(result => {
            result.forEach(note => {
                console.log(note)
            })
            mongoose.connection.close()
        })
    })
    .then(() => {
        console.log('note saved!')
        return mongoose.connection.close()
    })
    .catch((err) => console.log(err))
