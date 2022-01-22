const mongoose = require('mongoose')
const uniqueV = require('mongoose-unique-validator')
const blogSchema = new mongoose.Schema({

    title: { type: String, required: true },
    author: String,
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
blogSchema.plugin(uniqueV)
module.exports = mongoose.model('Blog', blogSchema)