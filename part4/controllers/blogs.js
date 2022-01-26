const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/api/blogs', async(request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouter.post('/api/blogs', async(request, response, next) => {
    const body = request.body
    const user = await User.findById(body.userId)
    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user.id
    })
    try {
        console.log('we go here')
        const saved = await blog.save()
        console.log(saved.id)
        user.blogs = user.blogs.concat(saved.id)
        console.log(user.blogs)
        await user.save()
        console.log('wer dont go here')
        response.status(201).json(saved.toJSON())
    } catch (e) {
        response.status(400)
        next(e)
    }

})

blogsRouter.delete('/api/blogs/:id', async(request, response) => {
    const id = request.params.id
    const delBlog = await Blog.findByIdAndRemove(id)
    response.json(delBlog)

})

blogsRouter.put('/api/blogs/:id', async(request, response) => {
    const id = request.params.id
    const updatedBlog = await Blog.findByIdAndUpdate(id, { likes: request.body.likes })
    response.status(200).json(updatedBlog)

})

module.exports = blogsRouter