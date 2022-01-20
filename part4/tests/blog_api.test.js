const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('notes are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 10000)

test('await test2', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(2)

}, 10000)

test('lets check another one', async () => {
    const ap = await api.get('/api/blogs')
    expect(ap.body[0].likes).toBe(50)

})

afterAll(() => {
    mongoose.connection.close()
})