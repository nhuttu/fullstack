const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const mongoose = require('mongoose')
const usersRouter = require('./controllers/users')

console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('connected to MONGODB')
    })
    .catch((error) => {
        console.log('error connection to MONGODB:', error.message)
    })

app.use(cors())
app.use(express.json())
app.use('/', blogsRouter)
app.use('/', usersRouter)
module.exports = app