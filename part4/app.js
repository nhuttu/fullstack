const config = require('./utils/config')
const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const loginRouter = require('./controllers/login')
const blogsRouter = require('./controllers/blogs')
const mongoose = require('mongoose')
const usersRouter = require('./controllers/users')

console.log('connecting to', config.MONGODB_URI)
app.use('/', blogsRouter)
app.use('/', usersRouter)
app.use('/api/login', loginRouter)
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('connected to MONGODB')
    })
    .catch((error) => {
        console.log('error connection to MONGODB:', error.message)
    })

module.exports = app