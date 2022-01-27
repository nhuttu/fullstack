const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({

    title: { type: String, required: true },
    author: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    url: { type: String, required: true },
    likes: { type: Number, default: 0 }

})

blogSchema.set('toJSON', {
    transform: (doc, retObj) => {
        retObj.id = retObj._id.toString()
        delete retObj._id
        delete retObj.__v

    }
})
const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog