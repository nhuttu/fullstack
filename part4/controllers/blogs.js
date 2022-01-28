const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const middleware = require('../utils/middleware')

blogsRouter.get('/api/blogs', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
    response.json(blogs)
})

blogsRouter.post('/api/blogs', middleware.userExtractor, async (request, response, next) => {
    const body = request.body
    const decodedToken = jwt.verify(request.token, config.SECRET)
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = request.user
    console.log(user)
    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user.id
    })
    try {
        const saved = await blog.save()
        user.blogs = user.blogs.concat(saved.id)
        await user.save()
        response.status(201).json(saved.toJSON())
    } catch (e) {
        response.status(400)
        next(e)
    }

})

blogsRouter.delete('/api/blogs/:id', middleware.userExtractor, async (request, response) => {
    const decodedToken = jwt.verify(request.token, config.SECRET)
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = request.user
    console.log(user)
    const id = request.params.id
    const delBlog = await Blog.findById(id)
    console.log(delBlog)
    if ( delBlog.user.toString() === user.id.toString() ) {
        await Blog.findByIdAndRemove(id)
        return response.status(200).json(delBlog)
    }

})

blogsRouter.put('/api/blogs/:id', async (request, response) => {
    const id = request.params.id
    const updatedBlog = await Blog.findByIdAndUpdate(id, { likes: request.body.likes })
    response.status(200).json(updatedBlog)

})

module.exports = blogsRouter