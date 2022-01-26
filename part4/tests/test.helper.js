const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    [
        {
        _id: '61e157eefbef7c5e44ea4bd8',
        title: 'Työtön',
        author: 'pepe',
        url: 'http://pepe.abc',
        likes: 50,
        __v: 0
        },
        {
        _id: '61e1719fc89658a23e9ea299',
        title: 'jep',
        author: 'joku',
        url: 'http://abc.abasdc',
        likes: 111,
        __v: 0
        }
        ]
]

const blogsInDB = async () => {
    const blogs = await Blog.find({})
    return blogs.map(b => b.toJSON())
}
const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    blogsInDB,
    initialBlogs,
    usersInDb
}