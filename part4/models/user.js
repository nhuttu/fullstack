const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    passwordHash: String,

})

userSchema.set('toJSON', {
    transform: (doc, retObj) => {
        retObj.id = retObj._id.toString()
        delete retObj._id
        delete retObj.__v
        delete retObj.passwordHash
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User