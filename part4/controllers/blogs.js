const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/api/blogs', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})
blogsRouter.get('/', (req, res) => {
    res.send('<p>hello</p>')
})
blogsRouter.post('/api/blogs', async (request, response, next) => {
    const blog = new Blog(request.body)
    try {
        const saved = await blog.save()
        response.status(201).json(saved)
    } catch (e) {
        response.status(400)
        next(e)
    }
    
})

blogsRouter.delete('/api/blogs/:id', async (request, response) => {
    const id = request.params.id
    const delBlog = await Blog.findByIdAndRemove(id)
    response.json(delBlog)

})

blogsRouter.put('/api/blogs/:id', async (request, response) => {
    const id = request.params.id
    const updatedBlog = await Blog.findByIdAndUpdate(id, { likes: request.body.likes })
    response.status(200).json(updatedBlog)

})

module.exports = blogsRouter
