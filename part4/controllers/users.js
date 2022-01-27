const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/api/users', async(request, response, next) => {
    const body = request.body
    if (body.password.length < 3 || body.username.length < 3) {
        return response.status(401).json({ error: 'password/name length is less than 3' })
    }
    const saltR = 10
    const passwordHash = await bcrypt.hash(body.password, saltR)
    const user = new User({
        username: body.username,
        name: body.name,
        password: passwordHash
    })
    try {
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    } catch (e) {
        next(e)
    }

})


usersRouter.get('/api/users', async(req, res) => {
    console.log('we get here')
    const users = await User.find({}).populate('blogs')
    res.json(users.map(u => u.toJSON()))
})

module.exports = usersRouter