const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test.helper')
const api = supertest(app)

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 10000)


test('lets check likes', async () => {
    const ap = await api.get('/api/blogs')
    expect(ap.body[0].likes).toBe(50)

})
test('id test', async () => {
    const res = await helper.blogsInDB()
    res.forEach(i => expect(i).toBeDefined())
}, 10000)

test('succeeds with valid data', async () => {
    const newBlog = {
        title: 'new blog post',
        author: 'new author pepe',
        url: 'authorpepe.com',
        likes: 50
    }
    const blogsAtStart = await helper.blogsInDB()
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)


    const blogsAtEnd = await helper.blogsInDB()
    expect(blogsAtEnd.length).toBe(blogsAtStart.length + 1)

    const contents = blogsAtEnd.map(n => n.title)
    expect(contents).toContain(
        'new blog post'
    )
}, 10000)
test('like missing', async () => {
    const newBlog = {
        title: 'new blog post 123',
        author: 'new author pepe123',
        url: 'authorpepe.com123',

    }
    const blogsAtStartlength = (await helper.blogsInDB()).length

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDB()
    expect(blogsAtEnd[blogsAtStartlength].likes).toBe(0)

}, 10000)

test('url and title missing', async () => {
    const newBlog = {
        author: 'pepe',
        likes: 125
    }
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)

    const blogs = await helper.blogsInDB()
    expect(blogs).not.toContain(newBlog)

}, 10000)
test('deletion', async () => {
    const blogsAtStartlength = (await helper.blogsInDB()).length
    const firstBlog = (await helper.blogsInDB())[0]

    console.log(firstBlog.id.toString())

    await api
        .delete(`/api/blogs/${firstBlog.id.toString()}`)
        .expect(200)

    const blogsAtEnd = await helper.blogsInDB()

    expect(blogsAtEnd).toHaveLength(blogsAtStartlength - 1)

    const contents = blogsAtEnd.map(r => r.title)

    expect(contents).not.toContain(firstBlog.title)
}, 10000)

afterAll(() => {
    mongoose.connection.close()
})