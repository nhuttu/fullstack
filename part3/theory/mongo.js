const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
console.log(process.argv)

const url =
  `mongodb://hurre:${password}@cluster0-shard-00-00.painn.mongodb.net:27017,cluster0-shard-00-01.painn.mongodb.net:27017,cluster0-shard-00-02.painn.mongodb.net:27017/note-app?ssl=true&replicaSet=atlas-7g7luv-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easkkky',
  date: new Date(),
  important: true,
})

Note.find({ content: 'HTML is Easkkky' }).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})